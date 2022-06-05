require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const v1Router = require('./routes');
const logger = require('./utils/logger');
const connectToDB = require('./utils/db');
const errorHandler = require('./middleware/errorHandler');
const validationErrorHandler = require('./middleware/validationErrorHandler');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1', v1Router);

app.use(validationErrorHandler);
app.use(errorHandler);

connectToDB();

app.listen(PORT, () => {
  logger.info(`server listening on port: ${PORT}`);
});
