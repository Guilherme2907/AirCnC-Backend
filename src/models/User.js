const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: String
});

module.exports = mongoose.model("User", UserSchema);