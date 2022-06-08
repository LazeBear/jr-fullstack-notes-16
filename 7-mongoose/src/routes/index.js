const express = require('express');
const studentRouter = require('./student');
const courseRouter = require('./course');
const userRouter = require('./user');
const authGuard = require('../middleware/authGuard');

const v1Router = express.Router();

v1Router.use('/students', authGuard, studentRouter);
v1Router.use('/courses', courseRouter);
v1Router.use('/users', userRouter);

module.exports = v1Router;
