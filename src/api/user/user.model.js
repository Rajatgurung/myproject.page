const { Model } = require("objection");

const tableNames = require("../../../db/tableNames");

class user extends Model {
  static get tableName() {
    return tableNames.user;
  }
  static get hidden() {
    return ["password"];
  }
}

module.exports = user;
