import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .createTable('banco', function(table){
    table.integer('codigo').notNullable().primary();
    table.string('nome',15).notNullable();
  })
  .createTable('domicilio', function(table) {
    table.integer('banco').notNullable();
    table.integer('agencia').notNullable();
    table.integer('numero').notNullable();
    table.string('pessoa', 8).notNullable();
    table.foreign('banco').references('banco.codigo');
    table.foreign('pessoa').references('pessoa.penumper');
    table.primary(['banco','agencia','numero']);
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .dropTable('banco')
  .dropTable('domicilio')
};
