const sectionService = require('../services/sectionService');

/**
 * @swagger
 * /sections:
 *   get:
 *     summary: Obter todas as seções
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
exports.getAllSections = async (req, res) => {
    try {
        const allSections = await sectionService.getAllSections();
        res.json(allSections);
    }catch (err) {
        res.json(err.message);
    }
}



