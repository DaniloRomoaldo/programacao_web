import * as cursoService from "./service.js"

export const criarCurso = (req, res) => {

    try {
        const curso = cursoService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento de requisição, tente mais tarde"})
    }
}


export const listarCursos = (req, res) => {

    try {
        const cursos = cursoService.listarCursos();
        res.status(200).json(cursos)
    } catch (error) {
        res.status(400).json({"message": "Houve um erro no processamento da requisição, tente mais tarde."});
    }
}


export const visulaizarCurso = (req, res) => {

    try {
        const curso = cursoService.visulaizarCurso(parseInt(req.params.id));
        res.status(200).json(curso);
    } catch (error) {
        res.status(404).json({"message": "Curso Não Encontrado"});
    }
}


export const atualizarCurso = (req, res) => {

    try {
        cursoService.atualizarCursoParcial(parseInt(req.params.id), req.body)
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}


export const atualizarCursoParcial = (req, res) => {

    try {
        cursoService.atualizarCursoParcial(parseInt(req.params.id), req.body);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});

    }
}


export const deleteCurso = (req, res) => {

    try {
        cursoService.deleteCurso(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(400).json({"message": "Erro ao processar a requisição."});
    }
}