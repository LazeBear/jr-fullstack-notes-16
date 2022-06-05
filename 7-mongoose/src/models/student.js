const { Schema, model } = require('mongoose');
const Joi = require('joi');

// firstName, lastName, email, courses

const schema = new Schema({
  // _id: {
  //   type: Number,
  // }
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        // regex
        // Joi
        // validator.js
        // express-validator
        // const validation = Joi.string().email().validate(email);
        // const { error } = validation;
        // if (error) {
        //   return false;
        // }
        // return true;
        // 如果返回false，才是验证失败
        return !Joi.string().email().validate(email).error;
      },
      msg: 'Invalid email format',
    },
  },
  courses: [
    {
      type: String,
      ref: 'Course',
    },
  ],
});

const Model = model('Student', schema);

module.exports = Model;
