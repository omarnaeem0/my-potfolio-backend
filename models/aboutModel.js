const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is mandatory"],
  },
  url: {
    type: String,
    required: [true, "url is mandatory"],
  },
  icon: {
    type: String,
    required: [true, "icon is mandatory"],
  },
});

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, "phone is mandatory"],
  },
  email: {
    type: String,
    required: [true, "email is mandatory"],
  },
});

const mainHighlightsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is mandatory"],
  },
  value: {
    type: String,
    required: [true, "value is mandatory"],
  },
  order: {
    type: Number,
    required: [true, "order is mandatory"],
  },
});

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is mandatory"],
  },
  jobTitle: {
    type: String,
    required: [true, "jobTitle is mandatory"],
  },
  headline: {
    type: String,
    required: [true, "headline is mandatory"],
  },
  description: {
    type: String,
    required: [true, "headline is mandatory"],
  },
  image: {
    type: String,
    required: [true, "image is mandatory"],
  },
  links: [linksSchema],
  contact: contactSchema,
  mainHighlights: [mainHighlightsSchema],
});

const About = mongoose.model("abouts", aboutSchema);

module.exports = About;
