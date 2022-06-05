const Course = require('../models/course');
const Student = require('../models/student');

// dependency injection
// decorators

// subscribe, unsubscribe

// debounce 200ms

async function getAllStudents(req, res) {
  // db.students.find()
  // query
  // query chain
  // .sort().limit() -> pagination
  const students = await Student.find()
    .select({ firstName: 1, lastName: 1 })
    .exec();
  // const query = Student.find();
  // if (process.env.NODE_ENV === 'production') {
  //   query.select('firstName lastName');
  // }
  // const students = await query.exec();

  /**
   * {
   *  data: [],
   *  error: "",
   *  message: ""
   * }
   *
   * res.json({ data: students })
   */
  return res.json(students);
}

async function getStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id).exec();
  if (!student) {
    return res.status(404).json({ error: 'student not found' });
  }
  return res.json(student);
}

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = new Student({ firstName, lastName, email });
  // try {

  await student.save();
  return res.status(201).json(student);
  // } catch (e) {
  // next(e);
  // return res.status(400).json(e);
  // }
}

async function updateStudentById(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = await Student.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    // return next(new DocumentNotFound('student', '_id'));
    return res.status(404).json({ error: 'student not found' });
  }
  return res.json(student);
}

async function deleteStudentById(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id).exec();
  if (!student) {
    return res.status(404).json({ error: 'student not found' });
  }
  await Course.updateMany({ students: id }, { $pull: { students: id } }).exec();
  return res.sendStatus(204);
}

async function addStudentToCourse(req, res) {
  // get student and course id
  const { id, code } = req.params;
  const course = await Course.findById(code).exec();
  let student = await Student.findById(id).exec();
  if (!student || !course) {
    return res.status(404).json({ error: 'student or course not found' });
  }
  // student.courses.addToSet(code);
  // await student.save();
  // const courseName = course.name;
  student = await Student.findByIdAndUpdate(
    id,
    { $push: { courses: code } },
    { new: true }
  ).exec();
  course.students.addToSet(id);
  await course.save();

  return res.json(student);
}

async function removeStudentFromCourse(req, res) {
  // get student and course id
  const { id, code } = req.params;
  const course = await Course.findById(code).exec();
  let student = await Student.findById(id).exec();
  if (!student || !course) {
    return res.status(404).json({ error: 'student or course not found' });
  }
  // student.courses.includes(code)
  student = await Student.findByIdAndUpdate(
    id,
    { $pull: { courses: code } },
    { new: true }
  ).exec();
  await Course.findByIdAndUpdate(code, { $pull: { students: id } }).exec();

  return res.json(student);
}

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudent,
  addStudentToCourse,
  removeStudentFromCourse,
};
