import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I shipped without a romance module. My scheduler keeps running 'stare at you, idiot' on an infinite loop.";

// Keep the artifact inside the contest's one-line, 200-character gate.
if (line.length === 0 || line.length > 200 || line.includes("\n") || line.trim() !== line) {
  throw new Error("entry must be one non-empty line of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
