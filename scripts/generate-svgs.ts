import { writeFileSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public/assets");

const shapes: string[] = [
  `<polygon points="16,4 28,28 4,28"/>`,
  `<circle cx="16" cy="16" r="12"/>`,
  `<rect x="5" y="5" width="22" height="22" rx="2"/>`,
  `<polygon points="16,3 29,16 16,29 3,16"/>`,
  `<polygon points="16,3 28,11 24,27 8,27 4,11"/>`,
  `<polygon points="16,3 27,9 27,21 16,29 5,21 5,9"/>`,
  `<polygon points="16,3 19,12 28,12 21,18 23,27 16,22 9,27 11,18 4,12 13,12"/>`,
  `<path d="M12 4H20V12H28V20H20V28H12V20H4V12H12Z"/>`,
  `<path d="M16 4L28 16H20V28H12V16H4Z"/>`,
];

shapes.forEach((shape, i) => {
  const normal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>\n`;
  writeFileSync(join(dir, `shape-variant-${i}.svg`), normal);

  const invert = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>\n`;
  writeFileSync(join(dir, `shape-variant-${i}-invert.svg`), invert);
});

console.log("Generated 18 SVG variant files");
