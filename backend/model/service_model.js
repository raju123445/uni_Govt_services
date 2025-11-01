import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    note: { type: String, required: true },
    action: { type: String, required: true },
    image: { type: String, required: true },
  });

  const services = mongoose.model("services" ,ServiceSchema);

  export default services;