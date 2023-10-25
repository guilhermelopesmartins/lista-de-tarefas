const repo = require('../repositories/sectionRepositoy');

exports.getAllSections = () => {
    return repo.getAllSections();
}