const http = require('http');
const fs = require('fs');
const path = require('path');
const homePage = fs.readFileSync(path.join(__dirname, 'home.html'));
const otherPage = fs.readFileSync(path.join(__dirname, 'other.html'));

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url === '/') {
    // res.setHeader('Content-Type', 'text/html');
    res.write(homePage);
    res.end();
    return;
  }
  if (req.url === '/other') {
    // res.setHeader('Content-Type', 'text/html');
    res.write(otherPage);
    res.end();
    return;
  }
});
server.listen(8080);

// 3000， 8000， 8080， 9000， 4200，
