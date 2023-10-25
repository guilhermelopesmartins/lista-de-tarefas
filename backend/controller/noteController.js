const noteService = require('../services/noteService')

/**
 * @swagger
 * tags:
 *   - name: Notes
 *     description: Endpoints related to notes
 */

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
        const newNote = await noteService.createNote(req.body);
        res.json(newNote);
    } catch (err) {
        res.json(err.message)
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
        const allNotes = await noteService.getAllNotes();
        res.json(allNotes);
    } catch (err) {
        res.json(err.message)
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
exports.getFromSection = async(req,res) => {
    try {
        const id = req.query.id_secao
        const notesFromBoard =  await noteService.getFromSection(id);
        res.json(notesFromBoard);
    } catch (err) {
        res.json(err.message)
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
exports.updateNote = async(req, res) => {
    try {
        const updatedNote = await noteService.updateNote(req.body);
        res.json('Nota atualizada');
    } catch (err) {
        res.json(err.message)
        
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
exports.deleteNote = async(req, res) => {
    try {
        const id = req.query.id;
        const deleteNote = await noteService.deleteNote(id);
        res.json("Nota excluida");
    } catch (err) {
        res.json(err.message)
        
    }
}