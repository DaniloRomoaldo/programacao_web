import * as alunoService from "./service.js"

// função para a rota POST
export const criarAluno = (req, res) => {
    
    try {
        const aluno = alunoService.criarAluno(req.body);
        res.status(201).json(aluno)
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento de requisição, tente mais tarde"})
    }
}

// função para a rota GET
export const listarAlunos = (req, res) => {

    try {
        const alunos = alunoService.listarAlunos();
        res.status(200).json(alunos);
        
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento da requisição, tente mais tarde."});
    }

}


// função para a rota GET/ com id
export const visulaizarAluno = (req, res) => {

    try {
        const aluno = alunoService.visulaizarAluno(parseInt(req.params.id));
        res.status(200).json(aluno);
    } catch (error) {
        res.status(404).json({"message": "Aluno Não Encontrado"});
    }

}

// função para a rota PUT
export const atualizarAluno = (req, res) => {

    try {
        alunoService.atualizarAluno(parseInt(req.params.id), req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}

// função para a rota PATCH
export const atualizarAlunoParcial = (req, res) => {

    try {
        alunoService.atualizarAlunoParcial(parseInt(req.params.id), req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}

// função para a rota DELETE
export const deleteAluno = (req, res) => {

    try {
        alunoService.deleteAluno(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição, tente mais tarde."});
    }
}