// 导入express包
const express = require('express');
const app = express();

const PORT = 3000;

// body-parser
// 4.xxx -> body-parser included in express
app.use(express.json()); // JSON
// app.use(express.urlencoded({ extended: true }));

// json: function(req, res, next) { }
// json: () => {
//   // high order function
//   // curring function
//   return (req, res, next) => {

//   }
// }
// app.use(express.json());

// 导入路由
const { router } = require('./router');

// 注册路由
app.use(router);

// 捕获错误并返回提示信息
// app.use((err, req, res, next) => {
//   if (err) {
//     res.send('操作错误，请更正后再试。');
//   } else next();
// });

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
