const userService = require('../services/userService')

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints relacionados as usuários
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login usuário
 *     description: Faz login
 *     tags:
 *       - Users
 *     parameters:
 *       - name: body
 *         in: body
 *         description: user object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */
exports.login = async(req, res) => {
    try {
        const login = await userService.login(req.body);
        res.json(login);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar usuário
 *     description: Create a new user with the provided data
 *     tags:
 *       - Users
 *     parameters:
 *       - name: body
 *         in: body
 *         description: user object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Users'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Cria usuário
exports.createUser = async(req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obter todas usuários
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */

//Obtem todas usuários
exports.getAllUsers = async(req,res) => {
    try {
        const allusers = await userService.getAllUsers();
        res.json(allusers);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obter usuários da seção
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: id_secao
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id da seção
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */

//Obtem todas usuários da seção
exports.getById = async(req,res) => {
    try {
        const id = req.query.id_secao;
        console.log(id);
        const usersById =  await userService.getById(id);
        res.json(usersById);
    } catch (err) {
        res.json(err.message)
    }
}

// /**
//  * @swagger
//  * /users:
//  *   put:
//  *     summary: Atualizar usuário
//  *     description: Create a new user with the provided data
//  *     tags:
//  *       - Users
//  *     parameters:
//  *       - name: body
//  *         in: body
//  *         description: user object
//  *         required: true
//  *         schema:
//  *           $ref: '#/definitions/Users'
//  *     responses:
//  *       201:
//  *         description: Successfully created
//  *       400:
//  *         description: Bad request
//  */

// //Atualizar usuário
// exports.updateUser = async(req, res) => {
//     try {
//         const updatedUser = await userService.updateUser(req.body);
//         res.json('usuário atualizada');
//     } catch (err) {
//         res.json(err.message)
        
//     }
// };

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Excluir usuário
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id da usuário
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */

//Excluir usuário
exports.deleteUser = async(req, res) => {
    try {
        const id = req.query.id;
        const deleteUser = await userService.deleteUser(id);
        res.json("Usuário excluida");
    } catch (err) {
        res.json(err.message)
        
    }
}