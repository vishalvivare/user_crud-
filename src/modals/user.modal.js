const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    mobile: { type: Number, required: true },
    city: { type: String, required: true },
    Address: [
      {
        line1: { type: String, required: true },
        line2: { type: String, required: true },
        Country: { type: String, required: true },
      },
    ],
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
