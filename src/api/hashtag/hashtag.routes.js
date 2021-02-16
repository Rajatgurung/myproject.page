const express = require("express");

const hashtag = require("./hashtag.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.body;
  const hashtags = await hashtag
    .query()
    .where("deleted_at", null)
    .page(query.page - 1 || 0, 10);
  res.json(hashtags);
});
router.post("/", async (req, res, next) => {
  try {
    // TODO: set user id by logged in user
    const query = req.body;
    const hastag = await project.query().insert(query);
    res.json(hastag);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
