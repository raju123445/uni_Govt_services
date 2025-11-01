import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  citizen_id: { type: String, required: true, unique: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  aadhaar_number: { type: String, required: true },
  pan_number: { type: String, required: true },
  role: { type: String, default: 'citizen' },
  password: { type: String, required: true }
});

export default mongoose.model("users", UserSchema);

