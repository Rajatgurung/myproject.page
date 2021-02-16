const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["comment"], (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.integer("project_id").unsigned();
    table.string("title", 50);
    table.text("body");
    table.datetime("deleted_at");
    table.timestamps(false, true);

    table.foreign("user_id").references("user.id");
    table.foreign("project_id").references("project.id");
  });
};

exports.down = async (knex) => {
  knex.schema.table(tableNames["comment"], (table) => {
    table.dropForeign("project_id");
    table.dropForeign("user_id");
  });
  await knex.schema.dropTableIfExists(tableNames["comment"]);
};
