import * as cursoService from "./service.js"

export const criarCurso = async (req, res) => {

    try {
        const curso = await cursoService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento de requisição, tente mais tarde"})
    }
}


export const listarCursos = async (req, res) => {

    try {
        const cursos = await cursoService.listarCursos();
        res.status(200).json(cursos);

    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento da requisição, tente mais tarde."});
    }
}


export const visulaizarCurso = async (req, res) => {

    try {
        const curso = await cursoService.visulaizarCurso(req.params.id);
        res.status(200).json(curso);
    } catch (error) {
        res.status(404).json({"message": "Curso Não Encontrado"});
    }
}


export const atualizarCurso = async (req, res) => {

    try {
        await cursoService.atualizarCursoParcial(req.params.id, req.body)
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}


export const atualizarCursoParcial = async (req, res) => {

    try {
        await cursoService.atualizarCursoParcial(req.params.id, req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});

    }
}


export const deleteCurso = async (req, res) => {

    try {
        await cursoService.deleteCurso(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}