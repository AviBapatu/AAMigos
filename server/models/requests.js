import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },
  issueDescription: String,
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Picked Up", "Approval", "In Repair", "Delivering", "Paid", "Denied"],
    default: "Pending" 
  },
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
  selectedServiceCenter: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceCenter" },
  affordable: { type: Map, of: Number},
  goodToHave : { type: Map, of: Number},
  niceToHave: { type: Map, of: Number},
  amountDue: { type: Number, default: 0 }, // Amount to be paid by the customer
  isPaid: { type: Boolean, default: false }, // Tracks if payment is completed
  createdAt: { type: Date, default: Date.now }
});

const Request = mongoose.model("Request", requestSchema);
export default Request;