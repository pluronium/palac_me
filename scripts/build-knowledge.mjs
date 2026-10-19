import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { runInNewContext } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const script = readFileSync(resolve(root, 'js/app.js'), 'utf8');
const dataSource = script.split('    // State Management')[0];
const data = runInNewContext(dataSource + '\nJSON.stringify({resumeExperience,skillsData,flagshipProjects,clientEngagements})');
const { resumeExperience, skillsData, flagshipProjects, clientEngagements } = JSON.parse(data);
const records = [];
const pages = ['home', 'about', 'resume', 'projects', 'hobbies'];
const decode = text => text.replace(/&(?:amp|lt|gt|quot|nbsp|#39);/g, entity => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&nbsp;': ' ', '&#39;': "'" })[entity]);
const clean = text => decode(text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
function add(page, title, content) {
  const text = clean(content);
  if (text.length > 30) records.push({ page, title, text });
}
for (let i = 0; i < pages.length; i++) {
  const start = html.indexOf('<section id="page-' + pages[i] + '"');
  const end = i + 1 < pages.length ? html.indexOf('<section id="page-' + pages[i + 1] + '"') : html.indexOf('<div id="project-modal"');
  if (start === -1 || end <= start) throw new Error('Missing section: ' + pages[i]);
  const section = html.slice(start, end);
  const text = clean(section);
  // Keep HTML section context bounded; the arrays below cover dynamic details separately.
  for (let at = 0; at < text.length; at += 1000) add(pages[i], pages[i][0].toUpperCase() + pages[i].slice(1), text.slice(at, at + 1100));
}
resumeExperience.forEach(x => add('resume', x.role + ' — ' + x.company, [x.period, x.summary, ...x.highlights].join(' ')));
skillsData.forEach(x => add('resume', x.title, x.items.join(', ')));
flagshipProjects.forEach(x => add('projects', x.title, [x.subtitle, x.metric, x.summary, ...x.details].join(' ')));
clientEngagements.forEach(x => add('resume', x.client, x.industry + '. ' + x.brief));
writeFileSync(resolve(root, 'worker/knowledge.json'), JSON.stringify(records, null, 2) + '\n');
console.log(`Generated ${records.length} portfolio knowledge records.`);