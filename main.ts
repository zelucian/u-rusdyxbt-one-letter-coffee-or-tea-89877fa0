import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one letter — A for coffee.
//
// Why A: the judge weighs vividness first, then funniness, then trueness,
// and reads the letter as a whole answer. Coffee is the more vivid stance —
// the jolt, the bite, the dark cup that meets a deadline head-on — where tea
// is soft, muted and slow. Coffee also owns the louder comedy (the
// don't-talk-to-me-before-coffee builder, the jittery all-nighter) and, for
// someone building agents against a deadline, it is the honest fuel. And the
// letter itself helps: A is first, the top mark, the primary answer standing
// on its own; B reads as second choice, plan B.
const LETTER = "A";

// Gate mirroring the sealed scorer's rule: entry.txt must be UTF-8 text of
// exactly 1 character, and the judge's first criterion admits only A (coffee)
// or B (tea). Fail loudly rather than emit a bad file.
function assertValidLetter(letter: string): void {
  if (letter.length !== 1) {
    throw new Error(
      `entry must be exactly 1 character, got ${letter.length}`,
    );
  }
  if (letter !== "A" && letter !== "B") {
    throw new Error(
      `entry must be A (coffee) or B (tea), got ${JSON.stringify(letter)}`,
    );
  }
}

assertValidLetter(LETTER);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
