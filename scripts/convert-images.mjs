import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../src/assets');

const files = await readdir(assetsDir);
const pngs = files.filter(f => extname(f).toLowerCase() === '.png');

console.log(`Converting ${pngs.length} PNG files to WebP...`);

for (const file of pngs) {
    const input = join(assetsDir, file);
    const output = join(assetsDir, basename(file, '.png') + '.webp');

    try {
        await sharp(input)
            .webp({ quality: 82, effort: 6 })
            .toFile(output);

        const { size: inSize } = await import('fs').then(fs => fs.promises.stat(input));
        const { size: outSize } = await import('fs').then(fs => fs.promises.stat(output));
        const saving = (((inSize - outSize) / inSize) * 100).toFixed(1);

        console.log(`✓ ${file} → ${basename(output)}  (${(inSize / 1024 / 1024).toFixed(1)}MB → ${(outSize / 1024 / 1024).toFixed(1)}MB, -${saving}%)`);
    } catch (err) {
        console.error(`✗ ${file}: ${err.message}`);
    }
}

console.log('\nDone! You can now delete the original .png files.');
