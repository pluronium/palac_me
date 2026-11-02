import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { runInNewContext } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const js = readFileSync(resolve(root, 'js/app.js'), 'utf8');
const css = readFileSync(resolve(root, 'css/styles.css'), 'utf8');
const knowledge = readFileSync(resolve(root, 'worker/knowledge.json'), 'utf8');

test('Adaptive USA CTA glows in both themes and does not glow in print', () => {
  assert.match(html, /class="adaptive-cta /);
  assert.match(css, /\.adaptive-cta\s*\{[^}]*box-shadow: [^;]+;/);
  assert.match(css, /\.adaptive-cta:hover,\s*\.adaptive-cta:focus-within\s*\{[^}]*box-shadow: [^;]+;/);
  assert.match(css, /\.theme-light \.adaptive-cta\s*\{[^}]*box-shadow: [^;]+;/);
  assert.match(css, /\.theme-light \.adaptive-cta:hover,\s*\.theme-light \.adaptive-cta:focus-within\s*\{[^}]*box-shadow: [^;]+;/);
  assert.match(css, /@media print\s*\{\s*\.adaptive-cta\s*\{\s*box-shadow: none !important;/);
});

test('hobbies section and navigation are absent from the public site and search index', () => {
  const archive = readFileSync(resolve(root, 'archive/hobbies.html'), 'utf8');
  const chat = readFileSync(resolve(root, 'js/chat.js'), 'utf8');
  assert.match(archive, /<section id="page-hobbies"/);
  assert.doesNotMatch(html, /page-hobbies|nav-hobbies|switchPage\('hobbies'\)|Hobbies Page/);
  assert.doesNotMatch(js + chat, /'hobbies'|mustacheChart|initMustacheChart/);
  assert.ok(JSON.parse(knowledge).every(record => record.page !== 'hobbies'));
  const deploy = readFileSync(resolve(root, '.github/workflows/deploy.yml'), 'utf8');
  assert.match(deploy, /path: '_site'/);
  assert.doesNotMatch(deploy, /cp -R archive|cp -R standalone-single-file/);
});

test('home copy reflects the requested positioning and no site content uses long dashes', () => {
  assert.match(html, /Fortune 50 national operations audit and unification playbook/);
  assert.match(html, /consulting rigor, a product builder's mindset, and solution architecture/);
  assert.match(html, /Explore the roles, challenges, and opportunities that shaped my professional journey/);
  assert.doesNotMatch(html + js + knowledge, /[\u2013\u2014]/);
  assert.doesNotMatch(html + knowledge, /Fortune 50 telecom GTM audits/);
});

test('resume timeline connects cards and preserves expand and collapse', () => {
  assert.match(css, /\.experience-entry:not\(:last-child\)::after/);
  assert.match(css, /\.theme-light \.experience-entry::before/);
  assert.match(css, /@media print\s*\{\s*\.experience-entry::before/);
  const container = { innerHTML: '' };
  const context = {
    document: { getElementById: id => id === 'experience-timeline' ? container : null },
    window: { addEventListener() {} }
  };
  runInNewContext(js, context);
  runInNewContext('renderResume()', context);
  assert.equal((container.innerHTML.match(/class="experience-entry /g) || []).length, 8);
  assert.match(container.innerHTML, /aria-expanded="true"/);
  runInNewContext("toggleRoleDetails('exp-adaptive')", context);
  assert.match(container.innerHTML, /aria-expanded="false"/);
  assert.equal((container.innerHTML.match(/class="experience-entry /g) || []).length, 8);
});

test('AWS, two-line degrees, and archived Mustache Masters website are in the right places', () => {
  const skillsData = runInNewContext(js + '\nskillsData', {
    window: { addEventListener() {} }
  });
  assert.ok(skillsData.find(group => group.title === 'Machine Learning, Cloud & BI').items.includes('AWS'));
  assert.match(html, /<span class="block">MBA \(University of Dayton\)<\/span><span class="block">BBA \(Temple University\)<\/span>/);
  assert.match(readFileSync(resolve(root, 'archive/hobbies.html'), 'utf8'), /href="https:\/\/www\.mustachemasters\.org\/"[^>]*rel="noopener noreferrer"[^>]*>\s*Visit Mustache Masters/);
  assert.doesNotMatch(html, /Custom Map: MM_Warehouse \(Steam Workshop\)/);
});

test('resume print shows only the full resume and restores interactive state', () => {
  const timeline = { innerHTML: '' };
  const skillsGrid = { innerHTML: '' };
  const skillButtons = Object.fromEntries(['all', 'data', 'product', 'business'].map(cat => [cat, {
    className: cat === 'data' ? 'bg-emerald-600' : '',
    classList: { contains(name) { return name === 'bg-emerald-600' && skillButtons[cat].className.includes(name); } }
  }]));
  const rootElement = {
    classes: new Set(),
    classList: {
      add(name) { rootElement.classes.add(name); },
      remove(name) { rootElement.classes.delete(name); }
    }
  };
  let afterprint;
  const context = {
    document: {
      documentElement: rootElement,
      getElementById: id => id === 'experience-timeline' ? timeline :
        id === 'skills-grid' ? skillsGrid : skillButtons[id.replace('skill-cat-', '')] || null
    },
    window: {
      addEventListener(name, callback) { if (name === 'afterprint') afterprint = callback; },
      print() {
        assert.ok(rootElement.classes.has('printing-resume'));
        assert.equal((timeline.innerHTML.match(/aria-expanded="true"/g) || []).length, 8);
        assert.match(skillsGrid.innerHTML, /Machine Learning, Cloud & BI/);
        assert.match(skillsGrid.innerHTML, /Product & Agile Tooling/);
      }
    }
  };
  runInNewContext(js, context);
  runInNewContext("renderResume(); filterSkills('data'); printResume()", context);
  assert.match(html, /onclick="printResume\(\)"/);
  assert.match(css, /html\.printing-resume \.page-section \{ display: none !important; \}/);
  assert.match(css, /html\.printing-resume #page-resume \{ display: block !important; \}/);
  assert.match(css, /html\.printing-resume #resume-block-experience,[\s\S]*?#resume-block-skills \{ display: block !important; \}/);
  assert.equal(typeof afterprint, 'function');
  afterprint();
  assert.ok(!rootElement.classes.has('printing-resume'));
  assert.equal((timeline.innerHTML.match(/aria-expanded="true"/g) || []).length, 2);
  assert.match(skillsGrid.innerHTML, /Machine Learning, Cloud & BI/);
  assert.doesNotMatch(skillsGrid.innerHTML, /Product & Agile Tooling/);
});