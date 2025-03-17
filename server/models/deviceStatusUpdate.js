import mongoose from "mongoose";

const deviceStatusSchema = new mongoose.Schema({
  request: { type: mongoose.Schema.Types.ObjectId, ref: "Request", required: true },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent", required: true },
  statusUpdates: {
    pickupConfirmed: { type: Boolean, default: false },
    serviceCenterApproved: { type: Boolean, default: false },
    repairInProgress: { type: Boolean, default: false },
    repairCompleted: { type: Boolean, default: false },
    delivered: { type: Boolean, default: false }
  },
  createdAt: { type: Date, default: Date.now }
});

const DeviceStatus = mongoose.model("DeviceStatus", deviceStatusSchema);
export default DeviceStatus;