const { SecaoNota } = require('../models')

exports.createSection = async (body) => {
    const newSection = await SecaoNota.create(body);
    return newSection;
}

exports.getAllSections = async () => {
    const allSections = await SecaoNota.findAll();
    return allSections;
}

exports.getFromUser = async (id) => {
    const sectionsFromUser = await SecaoNota.findAll({
        where: {
            id_usuario: id
        }
    });
    return sectionsFromUser;
}

exports.updateSection = async (body) => {
    const updatedSection = await SecaoNota.update(body, {
        where: {
            id: body.id
        }
    });
    return updatedSection;
}

exports.deleteSection = async (id) => {
    const deletedSection = await SecaoNota.destroy({
        where: {
            id: id
        }
    });
    return deletedSection;
}

exports.getById = async (id) => {
    const section = await SecaoNota.findAll({
        where: {
            id: id
        }
    });
    return section[0];
}