const express = require('express');

const app = express();

// application level middleware
app.use(express.json());
// use applies to all methods

// app.get('/', m1);
// app.get('/', m1,m2,m3,m4, (req, res) => {

const tasks = [];

let id = 1;

// request -> GET /v1/tasks
// app.get('/v1/tasks')
// match

// request -> GET /v1/tasks
// app.post('/v1/tasks')
// not match

// request -> GET /v1/tasks
// app.get('/v1')
// not match

// request -> GET /v1/tasks
// regex, *
// app.use('/v1/tasks')
// /v1/tasks /v1/tasks/:id /v1/tasks/xxxxxx
// match

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

const authGuard = (req, res, next) => {
  // get token from request header
  // extract user info from token or from db
  req.user = userInfo;
  next();
};

const m1 = (req, res, next) => {
  // req.user -> userInfo
  // if (error exists) {
  //   next(new Error('xxx'));
  //   return;
  // }
  // if token not exist {
  // res.json({ error: "token not found" });
  // xxxxx can be string, can be object {type:xxx, message:xxxx}, can be new Error('');
  // next(new Error('error'));
  // next(xxxx); (no need)
  // return;
  // }
  next();
};

// only target validation error
const errorM1 = (error, req, res, next) => {
  // if (error.type === 'validationError') {
  //   res.status(400).json({ error: error.message });
  //   return;
  // }
  // if (error instanceof CustomError) {
  //   res.status(400).json({ error: error.message });
  //   return;
  // }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  console.log(err); // logging lib -> db -> log -> logging platform
  res.status(500).json({ error: 'please try later' });
};

// next(new CustomError(''));
class CustomError extends Error {}

// const error = new ValidationError();
class ValidationError extends CustomError {
  constructor() {
    super();
  }
}

const taskRouter = express.Router();
// mini-app
taskRouter.get('/', (req, res) => {
  res.json([1, 2, 3]);
});

// route handler
const v1Router = express.Router();
v1Router.use('/tasks', taskRouter);
app.use('/v1', v1Router);

app.use(errorM1);
// app.use(errorM2);
app.use(errorHandler);

app.listen(3000);

// template engine

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
};

app.use(cors);

// function cors(){}

// const taskRouter = express.Router();
// // mini-app
// taskRouter.get('/', (req, res) => {
//   res.json([1, 2, 3]);
// });

// // route handler
// const v1Router = express.Router();
// v1Router.use('/tasks', taskRouter);
// app.use('/v1', v1Router);

// GET /v1/tasks
