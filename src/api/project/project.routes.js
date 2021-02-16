const express = require("express");

const project = require("./project.model");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const projects = await project.query().findById(id);
  res.json(projects);
});

router.get("/", async (req, res) => {
  const query = req.body;
  const projects = await project
    .query()
    .where("deleted_at", null)
    .page(query.page - 1 || 0, 10);
  res.json(projects);
});

router.post("/", async (req, res, next) => {
  try {
    const query = req.body;
    const projects = await project.query().insert(query);
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
