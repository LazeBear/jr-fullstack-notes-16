const tasks = [];
class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.done = false;
  }
}
let _id = 1;

// yaml

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      required:
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated unique identifier
 *        description:
 *          type: string
 *          description: description of the task
 *        done:
 *          type: boolean
 *          description: status of the task
 *      example:
 *        id: 1
 *        description: task 1
 *        done: false
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: return all tasks
 *    tags: [Tasks]
 *    parameters:
 *      - name: description
 *        in: query
 *        description: filter tasks by description
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: array of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *
 */
const getAllTasks = (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((e) =>
      e.description.includes(description)
    );
    res.json(filteredTasks);
    return;
  }
  res.json(tasks);
  return;
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  // var != null -> null / undefined
  // +id
  // NaN -> not a number
  const task = tasks.find((e) => e.id === Number(id));
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  res.json(task);
  // task ? res.json(task) : res.status(404).json({ error: 'Task not found' });
  // return;
};

const addTask = (req, res) => {
  const { description } = req.body;
  const task = new Task(_id++, description);
  tasks.push(task);
  res.status(201).json(task);
  return;
};

const updateTaskById = (req, res) => {
  const { id } = req.params;
  // req.body = {description: 'xxxx'};
  const { description, done } = req.body;

  const task = tasks.find((e) => e.id === Number(id));
  if (!task) {
    res.status(404).json('Task not found');
    return;
  }
  if (description) {
    task.description = description;
  }
  if (done) {
    task.done = !!done;
  }
  res.json(task);
  return;
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((i) => i.id === Number(id));
  if (index === -1) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204);
  return;
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask,
};
