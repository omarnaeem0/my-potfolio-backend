const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is mandatory"],
  },
  place: {
    type: String,
    required: [true, "place is mandatory"],
  },
  duration: {
    type: String,
  },
});

const Work = mongoose.model("works", workSchema);

module.exports = Work;
