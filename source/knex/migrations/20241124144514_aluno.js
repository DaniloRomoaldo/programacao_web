
const tableAluno = "aluno";
const tableCurso = "curso";

export async function up(knex) {
    return knex.schema.createTable(tableAluno, (table) => {
        table.uuid('id').defaultTo(knex.fn.uuid());
        table.string('nome', 100).notNullable();
        table.string('matricula', 100);
        table.strin('nome_curso',255);
    })
    .createTable(tableCurso, (table) => {
        table.uuid('id').defaultTo(knex.fn.uuid());
        table.string('nome', 255).notNullable();
    })
}


export async function down(knex) {
    return knex.schema.dropTable(tableAluno)
    .dropTable(tableCurso);
}