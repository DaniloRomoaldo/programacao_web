import * as cursoRepository from "../curso/repository.js";
import * as alunoRepository from "./repository.js";


// criar aluno
export const criarAluno = async (newAluno) => {
    
    await alunoRepository.create(newAluno);
    return newAluno;
}

// lista todos os alunos
export const listarAlunos = async () => {
    return alunoRepository.findAll();
}

// visualizar um aluno
export const visulaizarAluno = async (id) => {
    return alunoRepository.findOne(id);
}

// atualizar aluno
export const atualizarAluno = async (id, newAluno) => {
    await alunoRepository.update(id, newAluno);

}

// a atualização parcial faz copia por referêcnia ou eu vou precisar achamar o método de escrita novamente?
export const atualizarAlunoParcial = async (id, newAluno) => {
    const {nome, matricula, nome_curso} = newAluno;
    let aluno = alunoRepository.findOne(id);

    aluno.nome = nome ? nome : aluno.nome;
    aluno.matricula = matricula ? matricula : aluno.matricula;
    aluno.nome_curso = nome_curso ? nome_curso : aluno.nome_curso;

    await alunoRepository.update(id,aluno);

}


export const deleteAluno = async (id) => {
   await alunoRepository.destroy(id);
}

