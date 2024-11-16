import * as cursoRepository from "./repository.js"


export const criarCurso = (newCurso) => {
    cursoRepository.create(newCurso);
    return newCurso;
}

export const listarCursos = () => {
    return cursoRepository.findAll();
}

export const visulaizarCurso = (id) => {
    return cursoRepository.findOne(id);
}

export const atualizarCurso = (id, newCurso) => {
    cursoRepository.update(id, newCurso);
}

export const atualizarCursoParcial = (id, newCurso) => {
    const {nome} = newCurso;
    let curso = cursoRepository.findOne(id);

    curso.nome = nome ? nome : curso.nome;
}

export const deleteCurso = (id) => {
    cursoRepository.destroy(id);
}