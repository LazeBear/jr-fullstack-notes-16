const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

async function register(req, res) {
  const { username, password } = req.body;
  // validation
  // check if username duplicate
  // add uniq index to username
  const user = new User({ username, password });
  // hash password
  await user.hashPassword();
  await user.save();
  const token = await generateToken({ username });

  return res.json({ token });
}

// fail fast

async function login(req, res) {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username }).exec();
  if (!existingUser) {
    return res.status(401).json({ error: 'invalid username or password' });
  }

  const isPasswordValid = await existingUser.validatePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'invalid username or password' });
  }
  const token = await generateToken({ username, role: existingUser.role });
  return res.json({ token });
}

module.exports = {
  register,
  login,
};
