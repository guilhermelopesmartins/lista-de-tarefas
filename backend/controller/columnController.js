const columnService = require('../services/columnService');

/**
 * @swagger
 * tags:
 *   - name: Columns
 *     description: Endpoints relacionados as colunas
 */


/**
 * @swagger
 * /columns:
 *   post:
 *     summary: Criar coluna
 *     description: Cria nova colunas do quadro
 *     tags:
 *       - Columns
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Column object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Columns'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Cria quadro
exports.createColumn = async (req, res) => {
    try {
        const newColumn = await columnService.createColumn(req.body);
        res.json(newColumn);
    } catch (err) {
        res.json(err.message);
    }
}

/**
 * @swagger
 * /columns:
 *   get:
 *     summary: Obter todos as colunas
 *     description: Obtem todos as colunas.
 *     tags:
 *       - Columns
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todos quadros
exports.getAllColumns = async(req, res) => {
    try {
        const allColumns = await columnService.getAllColumns();
        res.json(allColumns);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /columns/{id}:
 *   get:
 *     summary: Obter quadros do usuário
 *     description: Obtém todos quadros do usuário.
 *     tags:
 *       - Columns
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
exports.getFromBoard = async(req,res) => {
    try {
        const id = req.query.id_usuario
        const columnsFromBoard =  await columnService.getFromBoard(id);
        res.json(columnsFromBoard);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /columns:
 *   put:
 *     summary: Atualizar coluna
 *     description: Atualiza coluna com base nos dados informados
 *     tags:
 *       - Columns
 *     parameters:
 *       - name: body
 *         in: body
 *         description: columns object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Columns'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Atualizar nota
exports.updateColumn = async(req, res) => {
    try {
        const updatedColumn = await columnService.updateColumn(req.body);
        res.json('Coluna atualizada');
    } catch (err) {
        res.json(err.message)
        
    }
}

/**
 * @swagger
 * /columns/{id}:
 *   delete:
 *     summary: Excluir coluna
 *     description: Exclui coluna pelo id.
 *     tags:
 *       - Columns
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id da coluna
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Excluir nota
exports.deleteColumn = async(req, res) => {
    try {
        const id = req.query.id;
        const deleteColumn = await columnService.deleteColumn(id);
        res.json("Coluna excluida");
    } catch (err) {
        res.json(err.message)
    }
}