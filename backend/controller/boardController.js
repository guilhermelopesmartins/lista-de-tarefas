const boardService = require('../services/boardService');

/**
 * @swagger
 * tags:
 *   - name: Boards
 *     description: Endpoints relacionados aos quadros
 */

/**
 * @swagger
 * /boards:
 *   post:
 *     summary: Criar quadro
 *     description: Cria novo quadro de tarefas
 *     tags:
 *       - Boards
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Board object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Boards'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Cria quadro
exports.createBoard = async (req, res) => {
    try {
        const newBoard = await boardService.createBoard(req.body);
        res.json(newBoard);
    } catch (err) {
        res.json(err.message);
    }
}

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: Obter todos os quadros
 *     description: Obtem todos os quadros.
 *     tags:
 *       - Boards
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todos quadros
exports.getAllBoards = async(req,res) => {
    try {
        const allBoards = await boardService.getAllBoards();
        res.json(allBoards);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /boards/{id}:
 *   get:
 *     summary: Obter quadros do usuário
 *     description: Obtém todos quadros do usuário.
 *     tags:
 *       - Boards
 *     parameters:
 *       - in: query
 *         name: id_usuario
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id do usuário
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todas os quadros do usuário
exports.getFromUser = async(req,res) => {
    try {
        const id = req.query.id_usuario
        const boardsFromBoard =  await boardService.getFromUser(id);
        res.json(boardsFromBoard);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /boards:
 *   put:
 *     summary: Atualizar quadrp
 *     description: Atualiza quadro com base nos dado informados
 *     tags:
 *       - Boards
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Boards object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Boards'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Atualizar nota
exports.updateBoard = async(req, res) => {
    try {
        const updatedBoard = await boardService.updateBoard(req.body);
        res.json('Quadro atualizado');
    } catch (err) {
        res.json(err.message)
        
    }
}

/**
 * @swagger
 * /boards/{id}:
 *   delete:
 *     summary: Excluir quadro
 *     description: Exclui quadro pelo id.
 *     tags:
 *       - Boards
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id do quadro
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Excluir nota
exports.deleteBoard = async(req, res) => {
    try {
        const id = req.query.id;
        const deleteBoard = await boardService.deleteBoard(id);
        res.json("Quadro excluido");
    } catch (err) {
        res.json(err.message)
    }
}