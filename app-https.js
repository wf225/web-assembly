// https://localhost:8000/
const https = require("https");
const fs = require("fs");
const path = require('path');

const key = fs.readFileSync(path.join(__dirname, ".", "encryption/domain.key"));
const cert = fs.readFileSync(path.join(__dirname, ".", "encryption/domain.crt"));
const options = {
  key: key,
  cert: cert
};
const port = 8000;
const host = "localhost";

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(port);

// use express
var express = require('express');
var app = express();

// GET /style.css etc
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});

var server = https.createServer(options, app);
server.listen(port, host);

console.log(`Listening at https://${host}:${port}`);