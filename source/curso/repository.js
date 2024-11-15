import { getCursos, getOneCurso, setCurso } from "../db.js";


export function create(Newcurso){
    return setCurso(Newcurso);
}


export const findAll = () => {
    return getCursos;
}

export const findOne = (id) => {
    return getOneCurso(id);
}

export const update = (id, Newcurso) => {
    cursos = getCursos();
    cursos[id] = Newcurso;
}

export const destroy = (id) => {
    cursos = getCursos();
    cursos.splice(id,1);
}
