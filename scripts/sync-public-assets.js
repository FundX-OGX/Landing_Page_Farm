/**
 * Sync images from src/assets to public so favicon + og:image use the same source.
 * Run before build (prebuild) so public/hero-valley.png and public/logo.svg are up to date.
 */
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const pairs = [
  ["src/assets/hero-valley.png", "public/hero-valley.png"],
  ["src/assets/logo.svg", "public/logo.svg"],
];

for (const [src, dest] of pairs) {
  const srcPath = join(root, src);
  const destPath = join(root, dest);
  if (!existsSync(srcPath)) {
    console.warn(`sync-public-assets: skip ${src} (not found)`);
    continue;
  }
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(srcPath, destPath);
  console.log(`sync-public-assets: ${src} → ${dest}`);
}
