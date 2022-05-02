const express = require('express');
const router = express.Router();

// 数据暂存
const tasks = [];
let id = 1;
// let flag = false;

// {data: , error:, status: }
// 获取全部任务
router.get('/tasks', (req, res) => {
  // // 判断是否有任务，没有则返回相关信息并跳出查询
  // if (tasks.length === 0) {
  //   res.send('当前还没有任务，请新建任务后再查询。');
  //   return;
  // }
  // array.filter()
  // ''.includes('')

  let tempArr = [];
  for (let i = 0; i < tasks.length; i++) {
    if (typeof tasks[i] !== 'string') {
      tempArr.push(tasks[i]);
    }
  }
  // 如果有，返回全部任务
  res.send(tempArr);
});

// 获取指定任务
router.get('/tasks/:id', (req, res) => {
  // 任务id是否存在
  if (req.params.id > 0 && req.params.id <= tasks.length) {
    // 判断任务是否已经完成
    if (tasks[req.params.id - 1].done) {
      res.send(`你查询的id为${req.params.id}的任务已完成。`);
      return;
    }
    // 存在，返回指定任务
    res.send(tasks[req.params.id - 1]); // 这里想用array.filter()/find()来实现，但一直返回空值，只能先用笨办法
  } else {
    // 不存在，返回无此任务的信息
    res.status(404).send(`你查询的id为${req.params.id}的任务不存在。`);
  }
});

// 添加任务
router.post('/tasks', (req, res) => {
  // 生成任务描述
  let taskString = 'tasks No.' + id;
  // 向数组添加任务数据
  tasks.push({ id: id++, description: taskString, done: false });
  // ++id, id++
  // id自增
  // id++;
  res.status(201).send(tasks);
});

// 更新指定任务
router.put('/tasks/:id', (req, res) => {
  const { description, done } = req.body;
  const elementIndex = array.findIndex((i) => Number(id) === i.id);
  tasks[elementIndex].description = description;
  // negation
  // const a = '123'; !a => false
  tasks[elementIndex].done = !!done;
  if (req.params.id > 0 && req.params.id <= tasks.length) {
    // tasks[req.params.id - 1].done = !flag;
    res.send(tasks[req.params.id - 1]);
  } else {
    res.status(404).send(`你要更新的id为${req.params.id}的任务不存在。`);
  }
});

// 删除指定任务
router.delete('/tasks/:id', (req, res) => {
  // id -> string
  // === false -> string === number
  // array.find()
  if (req.params.id > 0 && req.params.id <= tasks.length) {
    tasks.splice(
      req.params.id - 1,
      1,
      `id为${req.params.id}任务不存在或已删除`
    );
    res.status(204).send(`你删除的任务id为${req.params.id}`);
  } else {
    res.status(404).send(`你要删除的id为${req.params.id}的任务不存在。`);
  }
});

module.exports = { router };
