import { getAlunos, getOneAluno, setAluno } from "../db.js";


export function create(newAluno){
    return setAluno(newAluno);
}

export const findAll = () => {
    return getAlunos;
}

export const findOne = (id) => {
    return getOneAluno(id);
}

export const update = (id, newAluno) => {
    alunos = getAlunos();
    alunos[id] = newAluno;
}

export const destroy = (id) => {
    alunos = getAlunos();
    alunos.splice(id,1);
}