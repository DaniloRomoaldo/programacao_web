const alunos = [{
    "nome": "Danilo",
    "matricula": "123",
    "cursos": "artes"
  },
  {
    "nome": "Maria",
    "matricula": "456",
    "cursos": "Matematica"
  }];  // meu banco de dados temporário

const cursos = [{
    "id": 0,
    "nome": "Matemática"
},
{
    "id":1,
    "nome": "SI"
}]; // meu banco de dados de cursos 


//métodos de acesso ao banco de dados utilizando arrow function

export const getAlunos = () => alunos;
export const setAluno = (aluno) => alunos.push(aluno);
export const getOneAluno = (id) => alunos[id];


export const getCursos = () => cursos;
export const setCurso = (curso) => cursos.push(curso);
export const getOneCurso = (id) => cursos[id];





/*
export function getAlunos() { //função para retornar o array de alunos
    return alunos;
}

export function setAluno(aluno) { // função que recebe um objeto aluno e insere no banco de dados
    alunos.push(aluno);
}


export function getCursos() { //função para retornar o array de alunos
    return cursos;
}

export function setCursos(curso) { // função que recebe um objeto aluno e insere no banco de dados
    alunos.push(curso);
}

*/