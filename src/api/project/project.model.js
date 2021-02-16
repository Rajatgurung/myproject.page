const { Model } = require("objection");

const tableNames = require("../../../db/tableNames");

class Project extends Model {
  static get tableName() {
    return tableNames.project;
  }
}

module.exports = Project;
