const logger = require('../utils/logger');

module.exports = (error, req, res, next) => {
  // if
  // if
  logger.error(error);
  return res
    .status(500)
    .json({ error: 'something unexpected happened, please try again later' });
};
