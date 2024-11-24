
const tableAluno = "aluno";
const tableCurso = "curso";



export async function seed(knex) {

  await knex(tableAluno).del();
  await knex(tableAluno).insert([
    {nome: "Maria", matricula: "123"},
    {nome: "Danilo", matricula: "456"}
  ]);

  await knex(tableCurso).del();
  await knex(tableCurso).insert([
    {nome: "Artes"},
    {nome: "Matemática"}
  ])

}


