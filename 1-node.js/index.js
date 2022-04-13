// console.log('hello world');

// // REPL

// const moduleA = { exports: {} };
// const moduleB = { exports: {} };
// // const msg = 'secret msg';
// // const msg = 'another msg';
// (function (module) {
//   const msg = 'secret msg';

//   function getMsg() {
//     return msg;
//   }

//   module.exports = { getMsg };
// })(moduleA);

// (function (module) {
//   const msg = 'another msg';

//   function getMsg() {
//     return msg;
//   }

//   module.exports = { getMsg };
// })(moduleB);

// moduleA.exports.getMsg();
// moduleB.exports.getMsg();
// {
//   key: value
// }

// {
//   key: value
// }

const getMsgA = require('./messageA');
// const { getMsg: getMsgA } = require('./messageA');
const { getMsg: getMsgB } = require('./messageB');
getMsgA.getMsg();
getMsgB();
console.log(__dirname);
console.log(__filename);
// __dirname
// __filename
