import * as Knex from "knex";

exports.seed = function (knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return <any> knex("pessoa").del()
    .then(function () {
        // Inserts seed entries
        return knex("pessoa").insert([
            { penumper: "002" }, 
            { penumper: "003" }, 
            { penumper: "004" }
        ]);
    }).then(function () {
        return knex("pessoa")
    });
};
