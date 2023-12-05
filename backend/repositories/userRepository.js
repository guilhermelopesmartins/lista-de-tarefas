const { Usuario } = require('../models')
const bcrypt = require('bcrypt');

exports.createUser = async (body) => {
    body.senha = await bcrypt.hash(body.senha, 10);
    const newUser = await Usuario.create(body);
    return newUser;
}

exports.getAllUsers = async () => {
    const allUsers = await Usuario.findAll();
    return allUsers;
}

exports.getById = async (id) => {
    const userById =  await Usuario.findOne({
        where: {
            id: id
        }
    });
    return userById;
}

exports.getByEmail = async (email) => {
    const userByEmail = await Usuario.findOne({
        where: {
            email: email
        }
    });
    return userByEmail;
}

exports.deleteUser = async (id) => {
    const deletedUser = await Usuario.destroy({
        where: {
            id: id
        }
    });
    return deletedUser;
}