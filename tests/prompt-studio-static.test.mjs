import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const requiredControlIds = [
  'scenePurpose',
  'cameraShot',
  'composition',
  'lighting',
  'colorPalette',
  'mood',
  'negativePrompt',
  'detailLevel'
];

for (const id of requiredControlIds) {
  assert.match(html, new RegExp(`id="${id}"`), `missing advanced control: ${id}`);
}

const requiredLocaleKeys = [
  'purposeLabel',
  'cameraLabel',
  'compositionLabel',
  'lightingLabel',
  'paletteLabel',
  'moodLabel',
  'negativeLabel',
  'detailLabel'
];

for (const key of requiredLocaleKeys) {
  assert.match(html, new RegExp(`${key}:`), `missing locale key: ${key}`);
}

const expectedStyles = ['电影海报', '产品广告', '建筑可视化', '黏土模型', '剪纸艺术', '高级时装'];
for (const style of expectedStyles) {
  assert.match(html, new RegExp(`'${style}'`), `missing style preset: ${style}`);
}

assert.match(html, /function buildPromptContext\(/, 'missing structured prompt context builder');
assert.match(html, /function buildNegativePrompt\(/, 'missing negative prompt builder');
assert.match(html, /generateMidjourneyPrompt\(desc,\s*context\)/, 'Midjourney generator should consume context object');
assert.match(html, /generateSeedancePrompt\(desc,\s*context\)/, 'SeaDance generator should consume context object');
assert.match(html, /1000 \/ 20/, 'mobile canvas should cap around 20 fps');
assert.match(html, /maxNodes = state\.mobilePerformance \? 18 : 76/, 'mobile canvas should use a lower node cap');

console.log('prompt studio static checks passed');
