const express = require("express");

const project = require("./project/project.routes");
const hashtag = require("./hashtag/hashtag.routes");
const user = require("./user/user.routes");
const router = express.Router();

router.use("/user", user);
router.use("/project", project);
router.use("/hashtag", hashtag);

module.exports = router;
