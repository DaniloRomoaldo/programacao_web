// @ts-nocheck
import * as cursoRepository from "./repository.js"


export const criarCurso = async (newCurso) => {
    return cursoRepository.create(newCurso);
}

export const listarCursos = async () => {

    return cursoRepository.findAll();
}

export const visulaizarCurso = async (id) => {
    return cursoRepository.findOne(id);
}

export const atualizarCurso = async (id, newCurso) => {
    await cursoRepository.update(id, newCurso);
}

export const atualizarCursoParcial = async (id, newCurso) => {
    const {nome} = newCurso;
    let curso = cursoRepository.findOne(id);

    curso.nome = nome ? nome : curso.nome;

    await cursoRepository.update(id, curso);
}

export const deleteCurso = async (id) => {
   await cursoRepository.destroy(id);
}