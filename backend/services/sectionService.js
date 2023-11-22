const repo = require('../repositories/sectionRepositoy');

exports.createSection = (body) => {
    if(body.titulo.trim().length === 0)
        throw new Error('O título precisa ser informado.');

    return repo.createSection(body);
}

exports.getAllSections = () => {
    return repo.getAllSections();
}

exports.getFromUser = (id) => {
    if (id == null)
        throw new Error('Id não informado.');

    return repo.getFromUser(id);
}

exports.updateSection = (body) => {
    if (body == null)
        throw new Error('Seção não informada.');
    if (body.titulo.trim().length === 0)
        throw new Error('O título precisa ser informado.')

    return repo.updateSection(body);
}

exports.deleteSection = (id) => {
    if (id == null)
        throw new Error('Id não informado');

    return repo.deleteSection(id);
}

exports.getById = (id) => {
    if (id === 0)
        throw new Error('Id inválido');
    
    return repo.getById(id);
}