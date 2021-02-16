const { Model } = require("objection");

const tableNames = require("../../../db/tableNames");

class hashTag extends Model {
  static get tableName() {
    return tableNames.hashTag;
  }
}

module.exports = hashTag;
