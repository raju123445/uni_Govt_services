import express from "express";
import Service from "../model/service_model.js";
const router = express.Router();

router.get("/services", async (req, res) => {
    try {
      const services = await Service.find({});
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services" });
    }
})

export default router;