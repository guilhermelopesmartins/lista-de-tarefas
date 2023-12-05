const repo = require('../repositories/noteRepository')

exports.createNote = (body) => {
    if(body.titulo.trim().length === 0)
        throw new Error('O título precisa ser informado');
    if(body.descricao.trim().length === 0)
        throw new Error('A nota está vazia');
    
    return repo.createNote(body);
}

exports.getAllNotes = () => {
    return repo.getAllNotes();
}

exports.getById = (id) => {
    return repo.getById(id);
}

exports.getFromSection = (id) => {
    return repo.getFromSection(id);
}

exports.updateNote = (body) => {
    if(body.titulo.trim().length === 0)
        throw new Error('O título precisa ser informado');
    if(body.descricao.trim().length === 0)
        throw new Error('A nota está vazia');

    return repo.updateNote(body);
}

exports.deleteNote = (id) => {
    return repo.deleteNote(id);
}

exports.getByTitle = (title) => {
    return repo.getByTitle(title);
}