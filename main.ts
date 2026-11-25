// Laugh Track: The Crypto Trading Joke Contest
// One line about crypto trading life, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke is a literal here on purpose: the grader has no Chrome and the
// program must be self-contained, so there is nothing to render or fetch.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I bought the dip. The dip dipped. I bought that dip too. My portfolio is now a museum of falling knives.";

function main(): void {
  // The sealed gate wants 1-200 characters of UTF-8 text, not only
  // whitespace. Fail loudly here instead of shipping an invalid entry.
  if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
    throw new Error(`entry is ${JOKE.length} chars, outside the 1-200 gate`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
