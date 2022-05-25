const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JR tasks',
      version: '1.0.0',
      contact: {
        name: 'mason',
        email: 'exmaple.com',
      },
      description: 'xxxxx',
    },
  },
  apis: ['src/controllers/*.js'],
});
