const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["project"], (table) => {
    table.increments("id").primary();
    table.string("title", 100);
    table.string("tagline", 240);
    table.text("description");
    table.string("image");
    table.string("website");
    table.string("github");
    table.string("youtube");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user.id");
    table.dateTime("deleted_at");
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  knex.schema.table(tableNames["project"], (table) => {
    table.dropForeign("user_id");
  });

  await knex.schema.dropTableIfExists(tableNames["project"]);
};
