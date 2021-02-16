const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["hashTag"], (table) => {
    table.increments("id").primary();
    table.string("tag");

    table.dateTime("deleted_at");
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(tableNames["hashTag"]);
};
