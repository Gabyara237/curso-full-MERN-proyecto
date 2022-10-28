const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firtname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  active: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
