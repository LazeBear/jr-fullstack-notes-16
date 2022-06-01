const Course = require('../models/course');

async function getAllCourses(req, res) {
  const courses = await Course.find().exec();
  return res.json(courses);
}

async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id)
    .populate('students', { firstName: 1 })
    .exec();
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  return res.json(course);
}

async function addCourse(req, res) {
  const { code, name, description } = req.body;
  const existingCourse = await Course.findById(code).exec();
  if (existingCourse) {
    return res.status(409).json({ error: 'duplicate course code' });
  }
  const course = new Course({ name, code, description });
  await course.save();
  return res.status(201).json(course);
}

async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  const course = await Course.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  ).exec();
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  return res.json(course);
}

async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id).exec();
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  return res.sendStatus(204);
}

module.exports = {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  addCourse,
};

// app - CMS content management system
