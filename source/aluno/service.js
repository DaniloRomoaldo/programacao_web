import * as cursoRepository from "../curso/repository";
import * as alunoRepository from "./repository"

export const criarAluno = (NewAluno) => {
    const cursos = cursoRepository.findAll();
    const curso_aluno = cursos.find(curso => curso.id == NewAluno.id_curso);
    if (!curso_aluno){
        return "curso não encontrado"
    }

    create(NewAluno);
}

