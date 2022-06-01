const { Schema, model } = require('mongoose');

// _id: String, name, description, students
module.exports = model(
  'Course',
  new Schema({
    // course code
    _id: {
      type: String,
      uppercase: true,
      alias: 'code',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'this is a description',
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
      // {
      //   _id: {
      //     type: Schema.Types.ObjectId,
      //     ref: 'Student',
      //   },
      //   firstName: String,
      // },
    ],
  })
);
