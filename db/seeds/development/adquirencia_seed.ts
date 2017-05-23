import * as Knex from "knex";

import { IPessoa } from '../../../src/app/ipessoa';
import { IPessoaFisica } from '../../../src/app/ipessoa-fisica';
import { IPessoaJuridica } from '../../../src/app/ipessoa-juridica';
import { IEstabelecimentoComercial } from '../../../src/app/iestabelecimento-comercial';
import { IBanco } from '../../../src/app/ibanco';
import { IDomicilio } from '../../../src/app/idomicilio';
import { ICredenciadora } from '../../../src/app/icredenciadora';
import { IBandeira } from '../../../src/app/ibandeira';
import { ICredenciadoraBandeira } from '../../../src/app/icredenciadora-bandeira';
import { ITrava } from '../../../src/app/itrava';
import { ITravaBandeira } from '../../../src/app/itrava-bandeira';
import { IAntecipacaoAutomatica } from '../../../src/app/iantecipacao-automatica';
import { IAntecipacaoAutomaticaCredenciadora } from '../../../src/app/iantecipacao-automatica-credenciadora';
import { IAntecipacaoAutomaticaGetnet } from '../../../src/app/iantecipacao-automatica-getnet';
import { IAntecipacaoAutomaticaGetnetEC } from '../../../src/app/iantecipacao-automatica-getnet-ec';

exports.seed = function (knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return <any> knex("pessoa").del()
    .then(function () {
        // Inserts seed entries
        let data:IPessoa[] = [
            { penumper: "002" }, 
            { penumper: "003" }, 
            { penumper: "004" },
            { penumper: "005" },
            { penumper: "006" },
            { penumper: "007" },
            { penumper: "008" },
            { penumper: "009" },
            { penumper: "010" }
        ];
        return knex("pessoa").insert(data);
    }).then(function () {
        let data: IPessoaFisica[] = [
            { penumper: "002", cpf: '99332024308', name: 'Anderson' },
            { penumper: "004", cpf: '86542677984', name: 'Carlos' },
            { penumper: "006", cpf: '59502787633', name: 'Moreira' },
            { penumper: "008", cpf: '81772401617', name: 'Tavares' },
            { penumper: "010", cpf: '27051175475', name: 'Igor' },
        ];
        return knex("pessoa_fisica").insert(data);
    }).then(function() {
        let data: IPessoaJuridica[] = [
            { penumper: "001", cnpj: '18847217000105', name: 'Empresa 1', pai: null },
            { penumper: "003", cnpj: '16738748000126', name: 'Empresa 2', pai: '001' },
            { penumper: "005", cnpj: '89223265000162', name: 'Empresa 3', pai: '001' },
            { penumper: "007", cnpj: '63564735000168', name: 'Empresa 4', pai: null },
            { penumper: "009", cnpj: '60180747000109', name: 'Empresa 5', pai: '007' },
        ];
        return knex("pessoa_juridica").insert(data);
    }).then(function() {
        let data:
    });
};
