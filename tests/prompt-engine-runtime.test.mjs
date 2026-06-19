import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.slice(html.lastIndexOf('<script>') + '<script>'.length, html.lastIndexOf('</script>'));
const start = script.indexOf('/* ==================== 风格映射表 ==================== */');
const end = script.indexOf('/* ==================== 核心逻辑 ==================== */');
assert.ok(start > -1 && end > start, 'prompt engine block not found');

const sandbox = {
  document: { getElementById: () => null },
  console
};

vm.runInNewContext(`
${script.slice(start, end)}
const context = buildPromptContext({
  style: '产品广告',
  aspect: '9:16',
  quality: '3',
  stylize: '750',
  purpose: 'premium product hero shot, commercial readability, clear selling point',
  cameraShot: 'macro lens, tactile details, crisp texture',
  composition: 'editorial grid layout, premium whitespace, clean hierarchy',
  lighting: 'soft diffused studio lighting, clean shadows',
  colorPalette: 'luxury black, ivory, and muted gold palette',
  mood: 'mysterious, elegant, premium mood',
  detailLevel: 'ultra detailed textures, layered micro-details, production quality',
  negativePrompt: 'plastic-looking material'
});
globalThis.result = {
  mj: generateMidjourneyPrompt('a premium smart water bottle', context),
  flux: generateFluxPrompt('a premium smart water bottle', context),
  video: generateVideoPrompt('a premium smart water bottle', context),
  seedanceA: generateSeedancePrompt('a premium smart water bottle', context),
  seedanceB: generateSeedancePrompt('a premium smart water bottle', context),
  universal: generateUniversalPrompt('a premium smart water bottle', context)
};
`, sandbox);

const output = sandbox.result;
for (const [name, prompt] of Object.entries(output)) {
  assert.equal(prompt.includes('undefined'), false, `${name} leaked undefined`);
  assert.match(prompt, /premium|product|commercial/i, `${name} missed product context`);
  assert.match(prompt, /negative|--no|Avoid|avoid/i, `${name} missed negative guidance`);
}

assert.match(output.mj, /--ar 9:16/);
assert.match(output.mj, /--s 750/);
assert.match(output.flux, /Negative prompt:/);
assert.match(output.video, /Avoid:/);
assert.equal(output.seedanceA, output.seedanceB, 'SeaDance output should be deterministic for the same context');

console.log('prompt engine runtime checks passed');
