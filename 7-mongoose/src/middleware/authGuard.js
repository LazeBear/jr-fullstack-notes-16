const { validateToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  // Authorization: Bearer {token}
  const authorizationHeader = req.header('Authorization');
  if (!authorizationHeader) {
    return res.sendStatus(401);
  }
  const tokenArray = authorizationHeader.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
    return res.sendStatus(401);
  }

  const payload = validateToken(tokenArray[1]);
  if (!payload) {
    return res.sendStatus(401);
  }
  req.user = payload;

  return next();
};

// Role based
// Attribute based (operation)
