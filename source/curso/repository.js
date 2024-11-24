import { database } from "../knex/knexfile.js";


export const create = async (newCurso) => {
    await database('curso').insert({
        nome: newCurso.nome
    });
}



export const findAll = async () => {
    return database.select().from('curso')
}

export const findOne = async (id) => {
    return database.select().from('curso').where({id:id})
}

export const update = async (id, newCurso) => {
    await database('curso').where({id:id}).update({
        nome: newCurso.nome
    })
}

export const destroy = async (id) => {
    await database('curso').where({id:id}).del();
}
