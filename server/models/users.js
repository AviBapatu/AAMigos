import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true , required: true },
  password: {type : String , required: true},
  profilePicture: String,
  address : {
    dno : String,
    street: String,
    city: String,
    pincode: String
    },
  phone: String,
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Request" }]
});

const User = mongoose.model("User", userSchema);

export default User;