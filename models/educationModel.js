const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
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

const Education = mongoose.model("educations", educationSchema);

module.exports = Education;
