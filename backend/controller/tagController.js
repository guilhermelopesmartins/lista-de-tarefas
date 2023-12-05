const { Tag } = require('../models')

/**
 * @swagger
 * tags:
 *   - name: Tags
 *     description: Endpoints relacionados as tags
 */

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Obter todas as tags
 *     description: Obter todas as tags
 *     tags:
 *       - Tags
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */

//Obtem todas usuários
exports.getAllTags = async(req,res) => {
    try {
        const allusers = await Tag.findAll();
        res.json(allusers);
    } catch (err) {
        res.json(err.message)
    }
}

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Obter tag por id
 *     description: Obter tag por id
 *     tags:
 *       - Tags
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id da tag
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       500:
 *         description: Internal server error
 */

//Obtem todas usuários da seção
exports.getById = async(req,res) => {
    try {
        const id = req.query.id;
        const usersById =  await Tag.findOne({
            where: {
                id: id
            }
        });
        res.json(usersById);
    } catch (err) {
        res.json(err.message)
    }
}
