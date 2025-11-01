import bcrypt from "bcryptjs";

// Get password from command line argument
const password = '123456'; //process.argv[2];

if (!password) {
  console.error("❌ Please provide a password to hash. Example:");
  console.error("   node hash.js mypassword123");
  process.exit(1);
}

const saltRounds = 10;

const hashPassword = async () => {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("🔑 Hashed password:");
  console.log(hash);
};

hashPassword();
