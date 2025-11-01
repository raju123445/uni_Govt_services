import bcrypt from "bcryptjs";
import express from "express";
import User from "../model/user.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { citizen_id, password } = req.body;  // Changed from citizenID to match frontend

  try {
    // Log the received credentials
    console.log('Login attempt for citizen_id:', citizen_id);

    const user = await User.findOne({ citizen_id: citizen_id });
    
    if (!user) {
      console.log('User not found for citizen_id:', citizen_id);
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    // Remove password from user object before sending
    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({ 
      success: true, 
      message: "Login successful", 
      user: userResponse 
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
