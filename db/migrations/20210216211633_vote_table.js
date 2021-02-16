const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["vote"], (table) => {
    table.increments("id").primary();

    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user.id");
    table.integer("project_id").unsigned();
    table.foreign("project_id").references("project.id");
    table.integer("value");
    table.dateTime("deleted_at");
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  knex.schema.table(tableNames["vote"], (table) => {
    table.dropForeign("project_id");
    table.dropForeign("user_id");
  });

  await knex.schema.dropTableIfExists(tableNames["vote"]);
};
