const repo = require('../repositories/boardRepository');

exports.getAllBoards = () => {
    return repo.getAllBoards();
}

exports.getFromUser = (id) => {
    if (id == null)
        throw new Error('Usuário não informado.')
    return repo.getFromUser(id);
}

exports.createBoard = (body) =>{
    if (body == null)
        throw new Error('Quadro não informado.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo do quadro não informado.');

    return repo.createBoard(body);
}

exports.updateBoard = (body) => {
    if (body == null)
        throw new Error('Quadro não informado.');
    if (body.titulo.trim().length === 0)
        throw new Error('Titulo do quadro não informado.');
    
    return repo.updateBoard(body);
}

exports.deleteBoard = (id) => {
    if (id == null)
        throw new Error('Quadro não informado');
    
    return repo.deleteBoard(id);
}