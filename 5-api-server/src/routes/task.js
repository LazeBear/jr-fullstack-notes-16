const express = require('express');
const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTaskById,
  deleteTaskById,
} = require('../controllers/task');

const taskRouter = express.Router();

taskRouter.get('', getAllTasks);

taskRouter.get('/:id', getTaskById);

taskRouter.post('', addTask);

taskRouter.put('/:id', updateTaskById);

taskRouter.delete('/:id', deleteTaskById);

module.exports = taskRouter;
