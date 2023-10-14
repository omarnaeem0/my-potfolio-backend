const About = require("../models/aboutModel");
const Skills = require("../models/skillsModel");
const Education = require("../models/educationModel");
const Projects = require("../models/projectsModel");
const Work = require("../models/workModel");

exports.getWholeProfile = async (_, res) => {
  try {
    const data = await Promise.all([
      About.findById("652a2b9ce401e41ab9d6d98b"),
      Education.find(),
      Work.find(),
      Projects.find(),
      Skills.find(),
    ]);
    const [about, education, work, projects, skills] = data;
    res.status(200).json({
      status: "success",
      data: {
        about,
        education,
        work,
        projects,
        skills,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
