import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any>knex.schema
  .createTable('antecipacao_automatica', function(table) {
    table.integer('banco').notNullable();
    table.integer('agencia').notNullable();
    table.integer('conta').notNullable();
    table.integer('trava').notNullable();
    table.integer('termo').notNullable();
    table.string('status',1).notNullable();
    table.timestamp('dataContratacao');
    table.timestamp('dataCancelamento');
    table.foreign(['banco','agencia','conta','trava']).references(['trava.banco','trava.agencia','trava.conta','trava.numero']);
    table.primary(['banco','agencia','conta','trava','termo']);
  })
  .createTable('antecipacao_automatica_credenciadora', function(table) {
    table.integer('banco').notNullable();
    table.integer('agencia').notNullable();
    table.integer('conta').notNullable();
    table.integer('trava').notNullable();
    table.integer('termo').notNullable();
    table.string('credenciadora',3).notNullable();
    table.string('bandeira',3).notNullable();
    table.foreign(['banco','agencia','conta','trava','termo']).references(['antecipacao_automatica.banco','antecipacao_automatica.agencia','antecipacao_automatica.conta','antecipacao_automatica.trava','antecipacao_automatica.termo']);
    table.foreign(['credenciadora','bandeira']).references(['credenciadora_bandeira.credenciadora','credenciadora_bandeira.bandeira']);
    table.primary(['banco','agencia','conta','trava','termo','credenciadora','bandeira']);
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .dropTable('antecipacao_automatica')
  .dropTable('antecipacao_automatica_credenciadora');  
};
