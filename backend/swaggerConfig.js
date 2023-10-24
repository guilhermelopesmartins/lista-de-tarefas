const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      info: {
        title: 'Your API Title',
        version: '1.0.0',
        description: 'API description',
      },
      definitions: {
        Note: {
          type: 'object',
          properties: {
            // Define the properties of your Note object
          },
        },
      },
      basePath: '/',
    },
    apis: ['./controller/noteController.js'],
  };

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;