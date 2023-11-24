const { Raia } = require('../models');

exports.getAllColumns = async () => {
    const allColumn = await Raia.findAll();
    return allColumn;
}

exports.getFromColumn = async (id) => {
    const byBoard = await Raia.findAll({
        where: {
            id_quadro: id
        }
    });
    return byBoard;
}

exports.createColumn = async (body) => {
    const newColumn = await Raia.create(body);
    return newColumn;
}

exports.updateColumn = async (body) => {
    const updatedColumn = await Raia.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedColumn;
}

exports.deleteColumn = async (id) => {
    const deletedColumn = await Raia.destroy({
        where: {
            id: id
        }
    });
    return deletedColumn;
}