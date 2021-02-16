const tableNames = require("../tableNames");

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames["pevot"].project_tag, (table) => {
    table.increments("id").primary();
    table.integer("hash_tag_id").unsigned();
    table.foreign("hash_tag_id").references("hash_tag.id");
    table.integer("project_id").unsigned();
    table.foreign("project_id").references("project.id");
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists(tableNames["pevot"].project_tag);
};
