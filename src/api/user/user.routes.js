const express = require("express");

const user = require("./user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.body;
  const users = await user
    .query()
    .where("deleted_at", null)
    .page(query.page - 1 || 0, 10);
  res.json(users);
});

router.post("/", async (req, res, next) => {
  try {
    // TODO: set user id by logged in user
    const query = req.body;
    const user = await user.query().insert(query);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
