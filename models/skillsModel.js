const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is mandatory"],
    unique: true,
  },
  imgUrl: {
    type: String,
    required: [true, "imgUrl is mandatory"],
    unique: true,
  },
  order: {
    type: Number,
    required: [true, "order is mandatory"],
    unique: true,
  },
});

const Skills = mongoose.model("skills", skillsSchema);

module.exports = Skills;
