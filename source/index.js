import express from 'express';
import * as alunoController from './aluno/controller.js';
import * as cursoController from './curso/controller.js';

const app = express();
const port = 3000;

app.use(express.json());

// rotas para o aluno
app.post("/aluno", alunoController.criarAluno);
app.get("/alunos", alunoController.listarAlunos);
app.get("/alunos/:id", alunoController.visulaizarAluno);
app.put("/aluno/:id", alunoController.atualizarAluno);
app.patch("/aluno/:id", alunoController.atualizarAlunoParcial);
app.delete("/aluno/:id", alunoController.deleteAluno);


// rotas para o curso
app.post("/curso", cursoController.criarCurso);
app.get("/cursos", cursoController.listarCursos);
app.get("/cursos/:id", cursoController.visulaizarCurso);
app.put("/curso/:id", cursoController.atualizarCurso);
app.patch("/curso/:id", cursoController.atualizarCursoParcial);
app.delete("/curso/:id", cursoController.deleteCurso);




app.listen(port, () => console.log("Api em Execução"));