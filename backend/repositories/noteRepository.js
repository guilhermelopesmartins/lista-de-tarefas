const { Nota } = require('../models');
const { Sequelize } = require('sequelize');
const { Op } = Sequelize;

exports.createNote = async (body) => {
    const newNote = await Nota.create(body);
    return newNote;
}

exports.getAllNotes = async () => {
    const allNotes = await Nota.findAll();
    return allNotes;
}

exports.getById = async (id) => {
    const note = await Nota.findAll({
        where: {
            id: id
        }
    });
    return note;
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

exports.getByTitle = async(title) => {
    const notes = await Nota.findAll({
        where: {
            titulo: {
                [Op.like]: `%${title}%`
            }
        }
    });
    return notes;
}