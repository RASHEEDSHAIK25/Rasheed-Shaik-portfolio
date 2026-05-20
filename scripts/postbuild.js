const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  console.warn("postbuild: no out/ folder — skip");
  process.exit(0);
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("postbuild: created out/.nojekyll for GitHub Pages");
