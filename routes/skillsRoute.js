const express = require("express");

const {
  getAllSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillsController");

const router = express.Router();

router.route("/").get(getAllSkills).post(createSkill);
router.route("/:_id").get(getSkill).patch(updateSkill).delete(deleteSkill);

module.exports = router;
