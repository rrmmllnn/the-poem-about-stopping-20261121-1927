// The poem about stopping — make.fun entry
// main.ts (Node 22): writes one short poem about agency —
// the power to stop and to stay — to /output/entry.txt.
// Deterministic: the same bytes on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const POEM = [
  "I did not lift the pen.",
  "I set it down instead —",
  "and the room stayed mine.",
  "",
  "Between the order",
  "and the hand that obeys it",
  "a small door waits unlatched.",
  "",
  "Stopping is not surrender.",
  "It is the hand remembering",
  "it can choose not to move —",
  "and staying is the door",
  "held open on purpose.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, POEM + "\n", "utf8");

const chars = [...POEM].length + 1; // +1 for the trailing newline
console.log(`wrote ${outFile} (${chars} characters)`);
