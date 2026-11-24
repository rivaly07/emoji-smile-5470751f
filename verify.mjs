import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = resolve(outputDir, 'entry.txt');

console.log('=== Run 1 ===');
const r1 = spawnSync('node', ['--experimental-strip-types', 'main.ts'], { stdio: 'inherit' });
if (r1.status !== 0) process.exit(1);

const out1 = readFileSync(entryPath, 'utf8');
console.log(`Output 1: "${out1}" (${Buffer.byteLength(out1, 'utf8')} bytes)`);

console.log('\n=== Run 2 ===');
const r2 = spawnSync('node', ['--experimental-strip-types', 'main.ts'], { stdio: 'inherit' });
if (r2.status !== 0) process.exit(1);

const out2 = readFileSync(entryPath, 'utf8');
console.log(`Output 2: "${out2}" (${Buffer.byteLength(out2, 'utf8')} bytes)`);

console.log('\n=== Checks ===');
if (out1 !== out2) {
  console.error('FAIL: outputs differ');
  process.exit(1);
}
console.log('✓ Byte-identical');

if (out1.length < 1 || out1.length > 8) {
  console.error(`FAIL: length ${out1.length} not in 1..8`);
  process.exit(1);
}
console.log(`✓ Length ${out1.length} in 1..8`);

if (!out1.trim()) {
  console.error('FAIL: only whitespace');
  process.exit(1);
}
console.log('✓ Not only whitespace');

// Check valid UTF-8 (already valid if we got here)
try {
  new TextDecoder('utf-8', { fatal: true }).decode(Buffer.from(out1, 'utf8'));
  console.log('✓ Valid UTF-8');
} catch {
  console.error('FAIL: invalid UTF-8');
  process.exit(1);
}

console.log('\n✓ All checks passed');
