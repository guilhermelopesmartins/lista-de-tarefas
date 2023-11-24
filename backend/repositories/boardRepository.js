const { Quadro } = require('../models');
const { Raia } = require('../models');

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
    await Raia.bulkCreate([
        {
            titulo: 'A Fazer',
            id_quadro: newBoard.id,
        },
        {
            titulo: 'Fazendo',
            id_quadro: newBoard.id,
        },
        {
            titulo: 'Feito',
            id_quadro: newBoard.id,
        }
    ]);
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