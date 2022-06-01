const { Schema, model } = require('mongoose');

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
