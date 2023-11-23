const { Raias } = require('../models');

exports.getAllColumns = async () => {
    const allColumn = await Raias.findAll();
    return allColumn;
}

exports.getFromColumn = async (id) => {
    const byBoard = await Raias.findAll({
        where: {
            id_quadro: id
        }
    });
    return byBoard;
}

exports.createColumn = async (body) => {
    const newColumn = await Raias.create(body);
    return newColumn;
}

exports.updateColumn = async (body) => {
    const updatedColumn = await Raias.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedColumn;
}

exports.deleteColumn = async (id) => {
    const deletedColumn = await Raias.destroy({
        where: {
            id: id
        }
    });
    return deletedColumn;
}