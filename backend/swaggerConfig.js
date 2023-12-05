const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      info: {
        title: 'Lista de tarefas API',
        version: '1.0.0',
        description: 'Organizador de notas e tarefas',
      },
      definitions: {
        Note: {
          type: 'object',
          properties: {
            id:{
              type: 'integer'
            },
            id_secao:{
              type: 'integer'
            },
            titulo: {
              type: 'string'
            },
            descricao: {
              type: 'string'
            },
            hash_imagem: {
              type: 'string'
            },
            id_tag: {
              type: 'integer'
            }
          },
        },
        Sections: {
          type: 'object',
          properties: {
            id:{
              type: 'integer'
            },
            id_usuario: {
              type: 'integer'
            },
            titulo: {
              type: 'string'
            },
            descricao: {
              type: 'string'
            }
          },
        },
        Boards: {
          type: 'object',
          properties: {
            id_usuario: {
              type: 'integer'
            },
            titulo: {
              type: 'string'
            }
          }
        },
        Columns: {
          type: 'object',
          properties: {
            titulo: {
              type: 'string'
            },
            id_quadro: {
              type: 'integer'
            }
          }
        },
        Users: {
          type: 'object',
          properties: {
            nome: {
              type: 'string'
            },
            email: {
              type: 'string'
            },
            data_nascimento: {
              type: 'string',
              default: 'yyyy-mm-dd'
            },
            senha: {
              type: 'string'
            }
          }
        },
        Login: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            senha: {
              type: 'string'
            }
          }
        }
      }
    },
    apis: ['./controller/noteController.js', './controller/sectionController.js', './controller/boardController.js', './controller/columnController.js', './controller/userController.js'],
  };

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;