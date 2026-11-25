import sharp from "sharp";
import { statSync } from "fs";

const src = "scripts/source/profile.png";

const write = async (name, width, encode) => {
  const out = `public/images/${name}`;
  let pipeline = sharp(src).resize({ width, withoutEnlargement: true });
  pipeline = encode(pipeline);
  await pipeline.toFile(out);
  console.log(`${name}: ${(statSync(out).size / 1024).toFixed(1)} KB`);
};

await write("profile-400.avif", 400, (img) => img.avif({ quality: 55, effort: 6 }));
await write("profile-600.avif", 600, (img) => img.avif({ quality: 55, effort: 6 }));
await write("profile-400.webp", 400, (img) =>
  img.webp({ quality: 80, alphaQuality: 85, effort: 6 })
);
await write("profile-600.webp", 600, (img) =>
  img.webp({ quality: 80, alphaQuality: 85, effort: 6 })
);
await write("profile-400.png", 400, (img) =>
  img.png({ compressionLevel: 9, palette: true, quality: 85, effort: 10 })
);
