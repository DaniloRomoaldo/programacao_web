// @ts-nocheck
import { database } from "../knex/knexfile.js";

// conexão com kenx feita
export const create = async (newAluno) => {
    await database('aluno').insert({ // toda escrita é um método assincrono que necessita esperar a resposta
        nome: newAluno.nome,
        matricula: newAluno.matricula,
        nome_curso: newAluno.nome_curso
    })
}

export const findAll = async () => {
   // return database.select().from('aluno'); // por causa do return, não é preciso avisar a espera do método, é implícito
    return database.select().from('aluno')

   // return console.log(database)
}

export const findOne = (id) => {
    return database.select().from('aluno').where({id: id});
}

export const update = async (id, newAluno) => {
    await database('aluno').where({id: id}).update({
        nome: newAluno.nome,
        matricula: newAluno.matricula,
        nome_curso: newAluno.nome_curso
    })
}

export const destroy = async (id) => {
    await database('aluno').where({id: id}).del();
}