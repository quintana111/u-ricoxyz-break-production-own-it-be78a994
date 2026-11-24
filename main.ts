import { writeFileSync } from "node:fs";

// Chosen line: specific confession, plain ownership, punchline lands on "me".
const LINE =
  "I deleted the production database thinking it was staging. There is no backup. That was me.";

writeFileSync("/output/entry.txt", LINE);
