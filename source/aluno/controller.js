import * as alunoService from "./service.js"

// função para a rota POST
export const criarAluno = async (req, res) => {
    
    try {
        const aluno = await alunoService.criarAluno(req.body);
        res.status(201).json(aluno)
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento de requisição, tente mais tarde"})
    }
}

// função para a rota GET
export const listarAlunos = async (req, res) => {

    try {
        const alunos = await alunoService.listarAlunos();
        res.status(200).json(alunos);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({"message": "Houve um erro no processamento da requisição, tente mais tarde."});
    }

}


// função para a rota GET/ com id
export const visulaizarAluno = async (req, res) => {

    try {
        const aluno = await alunoService.visulaizarAluno(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        res.status(404).json({"message": "Aluno Não Encontrado"});
    }

}

// função para a rota PUT
export const atualizarAluno = async (req, res) => {

    try {
        await alunoService.atualizarAluno(req.params.id, req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}

// função para a rota PATCH
export const atualizarAlunoParcial = async (req, res) => {

    try {
        await alunoService.atualizarAlunoParcial(req.params.id, req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}

// função para a rota DELETE
export const deleteAluno = async (req, res) => {

    try {
        await alunoService.deleteAluno(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição, tente mais tarde."});
    }
}