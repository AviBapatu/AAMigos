import mongoose from "mongoose";

const serviceCenterSchema = new mongoose.Schema({
  name: String,
  city: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  address: String,
  contactNumber: String
});
const ServiceCenter = mongoose.model("ServiceCenter", serviceCenterSchema);

export default ServiceCenter;