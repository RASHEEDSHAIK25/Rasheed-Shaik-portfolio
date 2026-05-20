const crypto = require("crypto");

const password = process.argv[2];
if (!password) {
  console.error("Usage: node scripts/hash-password.js YOUR_SECRET_PASSWORD");
  process.exit(1);
}

const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log("\nAdd this to .env.local:\n");
console.log(`NEXT_PUBLIC_EDITOR_PASSWORD_HASH=${hash}\n`);
console.log("(Rebuild / restart dev server after saving.)\n");
