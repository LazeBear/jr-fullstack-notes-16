const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Model = model('User', schema);

module.exports = Model;

/**
 * 加密，解密，哈希
 * encrypt, decrypt, hash
 *
 * x -> X
 * X -> x
 *
 * x ->  Y
 * Y !-> x
 *
 * x' -> Y
 *
 * football -> xxxx
 * aaaaaaa -> bbbbbb
 *
 * 加盐
 * salt
 * football -salt1-> xxxx1salt1
 * football -salt2-> xxxx2salt2
 *
 */
