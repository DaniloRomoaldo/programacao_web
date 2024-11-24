// @ts-nocheck
import { Aluno } from "./entity.js"

// conexão com kenx feita
export const create = async (newAluno) => {
    await Aluno.create({ // toda escrita é um método assincrono que necessita esperar a resposta
        nome: newAluno.nome,
        matricula: newAluno.matricula,
        nome_curso: newAluno.nome_curso
    })
}

export const findAll = async () => {
   // return database.select().from('aluno'); // por causa do return, não é preciso avisar a espera do método, é implícito
    return Aluno.findAll();

   // return console.log(database)
}

export const findOne = (id) => {
    return Aluno.findOne({where: {id:id}});
}

export const update = async (id, newAluno) => {
    let aluno = await Aluno.findOne({where: {id:id}});

    if(!aluno)
        throw new Error("O aluno não existe!");

    await Aluno.update({
        nome: newAluno.nome,
        matricula: newAluno.matricula,
        nome_curso: newAluno.nome_curso
    })


    return aluno;

}

export const destroy = async (id) => {
    let aluno = await Aluno.findOne({where: {id:id}});

    if(!aluno)
        throw new Error("O aluno não existe!");

    await aluno.destroy();
}