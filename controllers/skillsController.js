const Skills = require("../models/skillsModel");

exports.getAllSkills = async (req, res) => {
  try {
    const data = await Skills.find(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSkill = async (req, res) => {
  const _id = req.params._id;
  try {
    const data = await Skills.findById(_id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const data = await Skills.create(req.body);
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateSkill = async (req, res) => {
  const _id = req.params._id;
  console.log(_id, req.body);
  try {
    const data = await Skills.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteSkill = async (req, res) => {
  const _id = req.params._id;
  console.log(_id, req.body);
  try {
    await Skills.findByIdAndDelete(_id);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
