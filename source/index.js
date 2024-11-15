import express from 'express';
import * as alunoController from './aluno/controller';

const app = express();
const port = 3000;

app.use(express.json());


app.post("/aluno", alunoController.criarAluno);
app.get("/alunos", alunoController.listarAlunos);
app.get("/alunos/:id", alunoController.visulaizarAluno);
app.put("/aluno/:id", alunoController.atualizarAluno);
app.patch("/aluno/:id", alunoController.atualizarAlunoParcial);
app.delete("/aluno/:id", alunoController.deleteAluno);

app.listen(port, () => console.log("Api em Execução"));