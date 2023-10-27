const { Quadro } = require('../models');

exports.getAllBoards = async () => {
    const allBoards = await Quadro.findAll();
    return allBoards;
}

exports.getFromUser = async (id) => {
    const byUser = await Quadro.findAll({
        where: {
            id_usuario: id
        }
    });
    return byUser;
}

exports.createBoard = async (body) => {
    const newBoard = await Quadro.create(body);
    return newBoard;
}

exports.updateBoard = async (body) => {
    const updatedBoard = await Quadro.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedBoard;
}

exports.deleteBoard = async (id) => {
    const deletedBoard = await Quadro.destroy({
        where: {
            id: id
        }
    });
    return deletedBoard;
}