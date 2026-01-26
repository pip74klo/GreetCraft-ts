export const getPoetryRules = (length: "short" | "medium" | "long") => {
  if (length === "short") {
    return `
POETRY FORMAT (STRICT — NO EXCEPTIONS):
- This MUST be a rhyming poem.
- EXACTLY 4 lines (quatrain).
- Rhyme scheme MUST be AABB.
- Lines 1 and 2 MUST rhyme.
- Lines 3 and 4 MUST rhyme.
- All lines MUST end with a rhyming word.
- Each line MUST start with "• ".
- Do NOT use free verse.
- Do NOT mix rhyme schemes.
- Emojis: EXACTLY 2 emojis on the LAST line only.

FINAL CHECK:
If the lines do NOT rhyme, regenerate the poem internally until they do.
Only output the final rhyming version.

`;
  }

  return `
POETRY FORMAT (STRICT):
- This MUST be a rhyming poem.
- 4 to 6 lines.
- Rhyme scheme MUST be AABB or ABAB.
- All lines MUST end with rhyming words.
- Do NOT use free verse.
- Each line MUST start with "• ".
- Emojis: 2-4 emojis on the LAST line only.

FINAL CHECK:
If the lines do NOT rhyme, regenerate the poem internally until they do.
Only output the final rhyming version.

`;
};