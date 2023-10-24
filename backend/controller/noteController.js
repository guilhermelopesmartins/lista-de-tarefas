const pool = require("../db")
const { Nota } = require('../models')

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Criar nota
 *     description: Create a new note with the provided data
 *     tags:
 *       - Notes
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Note object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Cria nota
exports.createNote = async(req, res) => {
    try {
        const newNote = await Nota.create(req.body);
        res.json(newNote);
    } catch (err) {
        console.error(err.message)
    }
}

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Obter todas notas
 *     description: Retrieve a list of all notes.
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todas notas
exports.getAllNotes = async(req,res) => {
    try {
        const allNotes = await Nota.findAll();
        res.json(allNotes);
    } catch (err) {
        console.error(err.message)
    }
}

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Obter notas da seção
 *     description: Retrieve a list of all notes.
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: query
 *         name: id_secao
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id da seção
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todas notas da seção
exports.getFromBoard = async(req,res) => {
    try {
        const id = req.query.id_secao
        const notesFromBoard =  await Nota.findAll({
            where: {
                id_secao: id
            }
        })
        res.json(notesFromBoard);
        
    } catch (err) {
        console.error(err.message)
    }
}

/**
 * @swagger
 * /notes:
 *   put:
 *     summary: Atualizar nota
 *     description: Create a new note with the provided data
 *     tags:
 *       - Notes
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Note object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Atualizar nota
exports.updateOneNote = async(req, res) => {
    try {
        const updatedNote = await Nota.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json('Nota atualizada');
    } catch (err) {
        console.error(err.message)
        
    }
};

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Excluir nota
 *     description: Retrieve a list of all notes.
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id da nota
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Excluir nota
exports.deleteOneNote = async(req, res) => {
    try {
        const id = req.query.id;
        const deleteNote = await Nota.destroy({
            where: {
                id: id
            }
        });
        res.json("Nota excluida");
    } catch (err) {
        console.error(err.message)
        
    }
}