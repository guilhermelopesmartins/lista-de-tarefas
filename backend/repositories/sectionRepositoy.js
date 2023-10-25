const { SecaoNota } = require('../models')

exports.getAllSections = async () => {
    const allSections = await SecaoNota.findAll();
    return allSections;
}