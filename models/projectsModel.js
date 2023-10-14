const mongoose = require("mongoose");

const techStackSchema = new mongoose.Schema({
  frameworks: {
    type: String,
  },
  languages: {
    type: String,
  },
  database: {
    type: String,
  },
});

const projectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "title is mandatory"],
  },
  intro: {
    type: String,
    required: [true, "place is mandatory"],
  },
  content: {
    type: String,
  },
  techStack: techStackSchema,
  baseUrl: {
    type: String,
    required: [true, "baseUrl is mandatory"],
  },
  images: {
    type: [String],
    required: [true, "images is mandatory"],
  },
  demo: {
    type: String,
  },
});

const Projects = mongoose.model("projects", projectsSchema);

module.exports = Projects;
