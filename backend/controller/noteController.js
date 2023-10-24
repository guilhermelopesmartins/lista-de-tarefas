const pool = require("../db")

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
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

//Create a note
exports.createNote = async(req, res) => {
    try {
        const { note } = req.body;
        const newNote = await pool.query("INSERT INTO tb_nota (id_secao, titulo, descricao, ultima) VALUES($1) RETURNING *", [note])
        res.json(newNote.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
}

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes
 *     description: Retrieve a list of all notes.
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Get all Notes
exports.getAllNotes = async(req,res) => {
    try {
        console.log("cheguei")
        const allNotes =  await pool.query("SELECT * FROM tb_nota");
        res.json(allNotes.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}
//Get One note
exports.getOneNote = async(req,res) => {
    try {
        const { id } = req.params;
        const oneNote =  await pool.query("SELECT * FROM note WHERE note_id = $1", [id]);
        res.json(oneNote.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Update a note

exports.updateOneNote = async(req, res) => {
    try {

        const {id} = req.params;
        const {description} = req.body

        const updatedNote = await pool.query("UPDATE note SET description = $1 WHERE note_id= $2", [description, id])
        
        res.json("Note has been updated")
    } catch (err) {
        console.error(err.message)
        
    }
};

//Delete a note

exports.deleteOneNote = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNote = await pool.query("DELETE FROM note WHERE note_id = $1", [id]);
        res.json("Note has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}