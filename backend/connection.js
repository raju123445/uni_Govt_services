import mongoose from "mongoose";

// connection.js should not load .env itself nor auto-run the connection on import.
// dotenv should be loaded once (for example in server.js) so that environment
// variables are available before calling connect().

// Use MONGO_URL from process.env when connection() is called.
async function connection() {
  const MONGO_URL = process.env.MONGO_URL || process.env.MONGO_URI;
  if (!MONGO_URL) {
    console.error("MONGO_URL is not set. Make sure .env is loaded before calling connection().");
    return;
  }

  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export default connection;