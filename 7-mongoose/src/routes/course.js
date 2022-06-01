const express = require('express');
const {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  addCourse,
} = require('../controllers/Course');

const courseRouter = express.Router();

courseRouter.get('', getAllCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.put('/:id', updateCourseById);
courseRouter.delete('/:id', deleteCourseById);
courseRouter.post('', addCourse);

module.exports = courseRouter;
