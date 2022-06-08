const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

function generateToken(payload) {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1h' });
}

function validateToken(token) {
  // return jwt.verify(token, JWT_KEY);
  try {
    return jwt.verify(token, JWT_KEY); // return payload
  } catch (e) {
    return null;
  }
}

// try {

//   validateToken()
// } catch () {

// }

module.exports = { generateToken, validateToken };
