// http://localhost:8000/
const http = require("http");
const path = require('path');

const port = 8000;
const host = "localhost";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at https://${hostname}:${port}/`);
// });

// use express
var express = require('express');
var app = express();

// GET /style.css etc
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});

app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://${host}:${port}`);
});