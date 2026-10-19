import assert from 'node:assert/strict';
import { test } from 'node:test';
import handler, { retrieve } from './index.mjs';

const origin = 'https://pluronium.github.io';
const env = { ALLOWED_ORIGIN: origin, OPENAI_API_KEY: 'test-secret' };
const post = (question, headers = {}) => new Request('https://worker.example/chat', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', ...headers }, body: JSON.stringify({ question }) });

test('knowledge retrieval finds portfolio projects and roles', () => {
  assert.ok(retrieve('What is the scoring product revenue?').some(x => x.text.includes('$3M')));
  assert.ok(retrieve('What does Adaptive USA do?').some(x => x.text.includes('Adaptive USA')));
  assert.deepEqual(retrieve('the and what'), []);
});

test('rejects untrusted origins, invalid questions and non-POST methods', async () => {
  assert.equal((await handler.fetch(new Request('https://worker.example/chat', { headers: { Origin: 'https://evil.example' } }), env)).status, 403);
  assert.equal((await handler.fetch(post('  '), env)).status, 400);
  assert.equal((await handler.fetch(post('x'.repeat(501)), env)).status, 400);
  assert.equal((await handler.fetch(new Request('https://worker.example/chat', { headers: { Origin: origin } }), env)).status, 405);
});

test('preflight and off-topic question', async () => {
  const options = await handler.fetch(new Request('https://worker.example/chat', { method: 'OPTIONS', headers: { Origin: origin } }), env);
  assert.equal(options.status, 204);
  assert.equal(options.headers.get('Access-Control-Allow-Origin'), origin);
  const result = await handler.fetch(post('zzyzxquux'), env);
  assert.deepEqual(await result.json(), { answer: "I couldn't find that information on this portfolio. Please check the site or reach out to Christopher directly.", sources: [] });
});

test('calls model server-side and provides section links without leaking key', async () => {
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.openai.com/v1/chat/completions');
    assert.equal(options.headers.Authorization, 'Bearer test-secret');
    assert.equal(JSON.parse(options.body).store, false);
    return new Response(JSON.stringify({ choices: [{ message: { content: 'Christopher is a Manager at Adaptive USA.' } }] }), { status: 200 });
  };
  try {
    const response = await handler.fetch(post('What role does Christopher have at Adaptive USA?'), env);
    assert.equal(response.status, 200);
    const result = await response.json();
    assert.match(result.answer, /Manager/);
    assert.ok(result.sources.some(s => s.page === 'resume' || s.page === 'about'));
    assert.ok(!JSON.stringify(result).includes('test-secret'));
  } finally { globalThis.fetch = oldFetch; }
});