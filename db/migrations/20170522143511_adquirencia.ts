import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .createTable('pessoa', function(table) {
    table.string('penumper',3).notNullable().primary();
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .dropTable('pessoa');
};
