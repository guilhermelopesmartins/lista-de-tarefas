const repo = require('../repositories/columnRepository');

exports.getAllColumns = () => {
    return repo.getAllColumns();
}

exports.getFromBoard = (id) => {
    if (id == null)
        throw new Error('Quadro não informado.')
    return repo.getFromBoard(id);
}

exports.createColumn = (body) =>{
    if (body == null)
        throw new Error('Coluna não informada.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo da coluna não informada.');

    return repo.createColumn(body);
}

exports.updateColumn = (body) => {
    if (body == null)
        throw new Error('Coluna não informada.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo do coluna não informada.');
    
    return repo.updateColumn(body);
}

exports.deleteColumn = (id) => {
    if (id == null)
        throw new Error('Coluna não informado');
    
    return repo.deleteColumn(id);
}