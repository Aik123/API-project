/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lost_items", (table) => {
    table.increments("id").primary().notNullable();
    table.string("date_found", 10);
    table.string("location_found", 15);
    table.string("name", 15).notNullable();
    table.string("category", 15).notNullable();
    table.string("description", 30).notNullable();
    table.string("img_url").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("lost_items");
};
