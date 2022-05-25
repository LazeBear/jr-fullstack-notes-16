require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const cors = require('./middleware/cors');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const v1Router = require('./routes');
const logger = require('./utils/logger');
const swaggerJsDoc = require('./utils/swagger');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

// GET /v1/tasks
// app.use('/v1')
// GET /tasks
app.use(v1Router);

app.listen(PORT, () => {
  logger.info(`server listening on port: ${PORT}`);
});

// /health_check
// /healthz
// on-call
