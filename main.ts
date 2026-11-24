import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = `${outputDir}/entry.txt`;

// One emoji, chosen for warmth + universality + not default
// 🥰 (smiling face with hearts) - warm, friendly, universally readable, feels chosen not default
const emoji = '🥰';

writeFileSync(entryPath, emoji, 'utf8');
console.log(`Wrote emoji to ${entryPath}: ${emoji} (${Buffer.byteLength(emoji, 'utf8')} bytes)`);
