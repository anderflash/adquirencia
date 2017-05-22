import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .createTable('pessoa_fisica', function(table) {
    table.string('penumper',8).notNullable().primary()
    table.foreign('penumper').references('pessoa.penumper').onUpdate('CASCADE').onDelete('CASCADE');
    table.string('cpf', 11).notNullable();
  })
  .createTable('pessoa_juridica', function(table) {
    table.string('penumper',8).notNullable().primary()
    table.foreign('penumper').references('pessoa.penumper').onUpdate('CASCADE').onDelete('CASCADE');
    table.string('cnpj', 14).notNullable();
    table.string('pai', 8).notNullable();
    table.foreign('pai').references('pessoa_juridica.penumper').onUpdate('CASCADE').onDelete('CASCADE');
  })
  .createTable('estabelecimento_comercial', function(table) {
    table.string('penumper',8).notNullable().primary()
    table.foreign('penumper').references('pessoa.penumper').onUpdate('CASCADE').onDelete('CASCADE');
    table.string('ec', 12).notNullable();
  });
};

exports.down = function (knex: Knex): Promise<any> {
  return <any> knex.schema
  .dropTable('pessoa_fisica')
  .dropTable('pessoa_juridica')
  .dropTable('estabelecimento_comercial');
};
