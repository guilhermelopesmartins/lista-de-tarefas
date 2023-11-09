const sectionService = require('../services/sectionService');

/**
 * @swagger
 * tags:
 *   - name: Sections
 *     description: Endpoints relacionados as seções de notas
 */

/**
 * @swagger
 * /sections:
 *   post:
 *     summary: Criar seção de notas
 *     description: Cria uma nova seção de notas
 *     tags:
 *       - Sections
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Section object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Sections'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

exports.createSection = async (req, res) => {
    try {
        console.log('cheguei no controller')
        console.log(req.body)
        const newSection = await sectionService.createSection(req.body);
        res.json(newSection);
    } catch (err) {
        res.json(err.message);
    }
}

/**
 * @swagger
 * /sections:
 *   get:
 *     summary: Obter todas as seções
 *     description: Retrieve a list of all notes.
 *     tags:
 *       - Sections
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Obtem todas notas
exports.getAllSections = async (req, res) => {
    try {
        const allSections = await sectionService.getAllSections();
        res.json(allSections);
    }catch (err) {
        res.json(err.message);
    }
}

/**
 * @swagger
 * /sections/{id}:
 *   get:
 *     summary: Obter seção de notas do usuário
 *     description: Obtem todas seções de notas do usuário
 *     tags:
 *       - Sections
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

//Obtem todas notas da seção
exports.getFromUser = async (req,res) => {
    try {
        const id = req.query.id_usuario
        console.log(id);
        console.log('cheguei');
        const sectionsFromUser =  await sectionService.getFromUser(id);
        res.json(sectionsFromUser);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /sections:
 *   put:
 *     summary: Atualizar seção de notas
 *     description: Atualiza seção de notas
 *     tags:
 *       - Sections
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Section object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Section'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */

//Atualizar seção
exports.updateSection = async(req, res) => {
    try {
        const updatedSection = await sectionService.updateSection(req.body);
        res.json('Seção atualizada');
    } catch (err) {
        res.json(err.message);
    }
};

/**
 * @swagger
 * /sections/{id}:
 *   delete:
 *     summary: Excluir seção de notas
 *     description: Exclui seção específica.
 *     tags:
 *       - Sections
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id da seção
 *     responses:
 *       200:
 *         description: Successfully retrieved notes
 *       500:
 *         description: Internal server error
 */

//Excluir seção
exports.deleteSection = async(req, res) => {
    try {
        const id = req.query.id;
        const deletedSection = await sectionService.deleteSection(id);
        res.json("Seção excluida");
    } catch (err) {
        res.json(err.message)
        
    }
}