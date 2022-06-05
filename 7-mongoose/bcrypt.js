const bcrypt = require('bcrypt');

const password = '123';

// const salt = bcrypt.genSaltSync(12);
const salt = '$2b$12$IoPobvmSVnkpz.Jjw/U6s.';
// $2b$12$IoPobvmSVnkpz.Jjw/U6s.
// $2b$12$IoPobvmSVnkpz.Jjw/U6s. /atUSDA.iRS3vlM1eBSMU5GZ0KK4Dyi

const result = bcrypt.hashSync(password, salt);
console.log(result);

// console.log(result);

// $2b$12$YuhzGVsj98RB2C8b//VZG.7GOsadAWa3kUxV/YEPMnLhwMudPqlO6
// $2b$12$DTIBs095c8BUv/RIGY69nejHHvzwmOjmvOj6yGU/qPYzcnU2nSLUW
