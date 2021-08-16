const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
  id: {
    type: String,
  },

  faves: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recs",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
