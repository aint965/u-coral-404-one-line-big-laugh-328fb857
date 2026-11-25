import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My doctor said cut back on salt, so now I cry directly into my food.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
