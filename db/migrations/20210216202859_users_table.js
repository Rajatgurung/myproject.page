const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["user"], (table) => {
    table.increments("id").primary();
    table.string("username");
    table.string("password").nullable();

    table.dateTime("deletedAt");
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(tableNames["user"]);
};
