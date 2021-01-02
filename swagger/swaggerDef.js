const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = [
  './src/modules/localizations/infra/http/routes/ratings.routes.ts',
];

swaggerAutogen(outputFile, endpointsFiles, doc);
