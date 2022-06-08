const express = require('express');
const {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudent,
  addStudentToCourse,
  removeStudentFromCourse,
} = require('../controllers/student');
const adminGuard = require('../middleware/adminGuard');

const studentRouter = express.Router();

// curring function
// high order function
// function tryCatch(routeHandler) {
//   return async (req, res, next) => {
//     try {
//       await routeHandler(req, res, next);
//     } catch (e) {
//       // res.json(e);
//       next(e);
//     }
//   };
// }

studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
studentRouter.post('', adminGuard, addStudent);
studentRouter.post('/:id/courses/:code', addStudentToCourse);
studentRouter.delete('/:id/courses/:code', removeStudentFromCourse);

module.exports = studentRouter;
