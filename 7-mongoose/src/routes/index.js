const express = require('express');
const studentRouter = require('./student');
const courseRouter = require('./course');
const userRouter = require('./user');

const v1Router = express.Router();

v1Router.use('/students', studentRouter);
v1Router.use('/courses', courseRouter);
v1Router.use('/users', userRouter);

module.exports = v1Router;
