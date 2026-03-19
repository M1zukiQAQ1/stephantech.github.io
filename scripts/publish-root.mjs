import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");
const distDir = resolve(rootDir, "dist");
const distAssetsDir = resolve(distDir, "assets");
const rootAssetsDir = resolve(rootDir, "assets");

await rm(resolve(rootDir, "index.html"), { force: true });
await rm(rootAssetsDir, { recursive: true, force: true });

await cp(resolve(distDir, "index.html"), resolve(rootDir, "index.html"));
await mkdir(rootAssetsDir, { recursive: true });
await cp(distAssetsDir, rootAssetsDir, { recursive: true });
await writeFile(resolve(rootDir, ".nojekyll"), "");
