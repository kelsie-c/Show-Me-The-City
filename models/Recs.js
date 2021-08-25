const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecsSchema = new Schema({
  image: String,
  location: String,
  title: {
    type:String, 
    validate: [({ length }) => length <= 40, "Title must be 40 characters or less"]
  },
  synopsis: {
    type: String,
    validate: [({ length }) => length <= 500, "Must be 500 characters or less"]
  },
  date: Date,
  category: String,
  favoritesList: Array,
  favorited: Number,
  userID: String
});

const Recs = mongoose.model("Recs", RecsSchema);

module.exports = Recs;
