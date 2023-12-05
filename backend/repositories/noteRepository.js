const { Nota } = require('../models')

exports.createNote = async (body) => {
    const newNote = await Nota.create(body);
    return newNote;
}

exports.getAllNotes = async () => {
    const allNotes = await Nota.findAll();
    return allNotes;
}

exports.getNotesId = async () => {
    const allNotes = await Nota.findAll();
    return allNotes;
}

exports.getFromSection = async (id) => {
    const notesFromBoard =  await Nota.findAll({
        where: {
            id_secao: id
        }
    });
    return notesFromBoard;
}

exports.updateNote = async (body) => {
    const updatedNote = await Nota.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedNote;
}

exports.deleteNote = async (id) => {
    const deleteNote = await Nota.destroy({
        where: {
            id: id
        }
    });
    return deleteNote;
}