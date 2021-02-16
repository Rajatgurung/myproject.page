const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.table(tableNames["user"], (table) => {
    table.dateTime("deleted_at");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(tableNames["user"], (t) => {
    t.dropColumn("deleted_at");
  });
};
