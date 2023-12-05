const repo = require('../repositories/userRepository')
const bcrypt = require('bcrypt');

exports.login = async(body) => {
    if(body.email.trim().length === 0)
        throw new Error('Email precisa ser informado');
    if(body.senha.trim().length === 0)
        throw new Error('Senha precisa ser informada');
    const user = await repo.getByEmail(body.email);
    if (!user || !await bcrypt.compare(body.senha, user.senha))
        throw new Error('Email ou Senha incorretos');

    const logedUser = {
        id: user.id,
        nome: user.nome,
        email: user.email
    }
    return logedUser;
}

exports.createUser = async (body) => {
    if(body.nome.trim().length === 0)
        throw new Error('Nome precisa ser informado');
    if(body.email.trim().length === 0)
        throw new Error('Email precisa ser informado');
    if(body.senha.trim().length === 0)
        throw new Error('Senha precisa ser informada');
    const user = await repo.getByEmail(body.email);
    if(user != null)
        throw new Error('Esse email já esta em uso no sistema');

    return repo.createUser(body);
}

exports.getAllUsers = () => {
    return repo.getAllUsers();
}

exports.getById = (id) => {
    return repo.getById(id);
}

// exports.updateUser = (body) => {
//     if(body.nome.trim().length === 0)
//         throw new Error('Nome precisa ser informado');
//     if(body.email.trim().length === 0)
//         throw new Error('Email precisa ser informado');
//     if(body.senha.trim().length === 0)
//         throw new Error('Senha precisa ser informada');
//     if(repo.emailExists(body.email, body.antigoEmail))
//         throw new Error('Esse email já esta em uso no sistema')

//     return repo.updateUser(body);
// }

exports.deleteUser = (id) => {
    return repo.deleteUser(id);
}