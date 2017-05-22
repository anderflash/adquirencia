import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .createTable('credenciadora', function(table) {
    table.string('codigo',3).notNullable().primary();
    table.string('nome',20).notNullable();
  })
  .createTable('bandeira', function(table) {
    table.string('codigo',3).notNullable().primary();
    table.string('nome',20).notNullable();
  })
  .createTable('credenciadora_bandeira', function(table) {
    table.string('credenciadora', 3).notNullable();
    table.string('bandeira', 3).notNullable();
    table.boolean('podeAntecipar').notNullable();
    table.foreign('credenciadora').references('credenciadora.codigo');
    table.foreign('bandeira').references('bandeira.codigo');
    table.primary(['credenciadora','bandeira']);
  })
  .createTable('trava', function(table) {
    table.integer('banco').notNullable();
    table.integer('agencia').notNullable();
    table.integer('conta').notNullable();
    table.integer('numero').notNullable();
    table.string('status',1).notNullable();
    table.foreign(['banco','agencia','conta']).references(['domicilio.banco','domicilio.agencia','domicilio.numero']);
    table.primary(['banco','agencia','conta','numero']);
  })
  .createTable('trava_bandeira', function(table) {
    table.integer('banco').notNullable();
    table.integer('agencia').notNullable();
    table.integer('conta').notNullable();
    table.integer('trava').notNullable();
    table.string('bandeira', 3).notNullable();
    table.foreign(['banco','agencia','conta','trava']).references(['trava.banco','trava.agencia','trava.conta','trava.numero']);
    table.foreign('bandeira').references('bandeira.codigo');
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .dropTable('credenciadora')
  .dropTable('bandeira')
  .dropTable('credenciadora_bandeira')
  .dropTable('trava')
  .dropTable('trava_bandeira');
};
