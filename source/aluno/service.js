import * as cursoRepository from "../curso/repository.js";
import * as alunoRepository from "./repository.js";


// criar aluno
export const criarAluno = (newAluno) => {
    
/*

// está dando algum erro nessa validação do curso
    const cursos = cursoRepository.findAll();
    const curso_aluno = cursos.find(curso => curso.id == newAluno.id_curso);


    // verificação se o curso existe
    if (!curso_aluno){
        return "curso não encontrado"
    }
*/

    alunoRepository.create(newAluno);
    return newAluno;
}

// lista todos os alunos
export const listarAlunos = () => {
    return alunoRepository.findAll();
}

// visualizar um aluno
export const visulaizarAluno = (id) => {
    return alunoRepository.findOne(id);
}

// atualizar aluno
export const atualizarAluno = (id, newAluno) => {
    alunoRepository.update(id, newAluno);

}

export const atualizarAlunoParcial = (id, newAluno) => {
    const {nome, matricula, cursos} = newAluno;
    let aluno = alunoRepository.findOne(id);

    aluno.nome = nome ? nome : aluno.nome;
    aluno.matricula = matricula ? matricula : aluno.matricula;
    aluno.cursos = cursos ? cursos : aluno.cursos;

}


export const deleteAluno = (id) => {
    alunoRepository.destroy(id);
}