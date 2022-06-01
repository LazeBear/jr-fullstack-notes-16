const express = require('express');
const studentRouter = require('./student');
const courseRouter = require('./course');

const v1Router = express.Router();

v1Router.use('/students', studentRouter);
v1Router.use('/courses', courseRouter);

module.exports = v1Router;
