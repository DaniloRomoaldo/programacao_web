// @ts-nocheck
import { Curso } from "./entity.js";


export const create = async (newCurso) => {
    await Curso.create({
        nome: newCurso.nome
    })
}



export const findAll = async () => {
    return Curso.findAll();    
}

export const findOne = async (id) => {
    return Curso.findOne({where: {id:id}})
}

export const update = async (id, newCurso) => {
   let curso = await Curso.findOne({where: {id:id}});

   if(!curso)
        throw new Error("O curso não existe!");

   await Curso.update({
        nome: newCurso.nome
   })

   return curso;
}

export const destroy = async (id) => {
    let aluno = await Curso.findOne({where: {id:id}});

    if(!aluno)
        throw new Error("O aluno não existe!");

    await curso.destroy();
}
