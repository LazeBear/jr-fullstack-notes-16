const express = require('express');

const app = express();

app.use(express.json());

const tasks = [];

let id = 1;

// {
//   "id": 1,
//   "description": "task No.1",
//   "done": false - 默认false
// }

// req, res, next
// application.method(path, callback function - route handler)
app.get('/', (req, res) => {
  // if (true) {
  //   res.send('hello world!!!!!!!!!');
  //   return;
  // }
  // 1
  // res.send('hello world');
  // return;
  // 2
  return res.send('hello world');
  //     res.json({name: "mason"})    (默认 200 status code)
  // 只返回 status code
  // res.sendStatus(204);
  // 只设置status code
  // res.status(201).json({})
});

/**
 * 从request里取数据
 * 1. body  -> POST, PUT, PATCH
 *    req.body    (必须使用express.json() middleware)
 * 2. query param -> GET  (?)
 *    req.query
 * 3. route param -> GET, POST, PUT, DELETE (大多数情况都是id)
 *    /:id
 */
app.post('/:id', (req, res) => {
  // req.body = {name: "mason"}
  // const name = req.body.name;
  const { name } = req.body;
  // console.log(name) // "mason"
  const { title } = req.query;
  const { id } = req.params;

  // let key = 'a';
  // key = 'b';
  // const obj = {[key]:name}

  res.send({ name, title, id });
  // {name: name} -> {name}
});
// app.put
// app.delete

app.listen(3000);

// template engine
