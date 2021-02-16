const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cros = require("cors");
const middlewares = require("./middlewares");
const api = require("./api");
const { Model } = require("objection");

const db = require("./db");
Model.knex(db);

const app = express();
app.use(morgan("tiny"));
app.use(cros());
app.use(helmet());
app.use(express.json());
app.use("/", api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
