const express = require("express");

const { getWholeProfile } = require("../controllers/profileController");

const router = express.Router();

router.route("/").get(getWholeProfile);

module.exports = router;
