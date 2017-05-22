import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any>knex.schema
  .createTable('antecipacao_automatica_getnet', function(table) {
    table.increments('id').primary();
    table.string('status', 1).notNullable();
    table.timestamp('dataContratacao');
    table.timestamp('dataCancelamento');
  })
  .createTable('antecipacao_automatica_getnet_ec', function(table) {
    table.integer('termo').notNullable();
    table.string('estabelecimento').notNullable();
    table.foreign('termo').references('antecipacao_automatica_getnet.id');
    table.foreign('estabelecimento').references('estabelecimento_comercial.penumper');
    table.primary(['termo', 'estabelecimento']);
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any>knex.schema
  .dropTable('antecipacao_automatica_getnet')
  .dropTable('antecipacao_automatica_getnet_ec');
};
