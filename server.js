// functionality and logic on server side

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  // added 
  else if (page == '/palindrome') {
    if ("word" in params) {
      const inputWord = params.word;
      const lowerCaseWord = inputWord.toLowerCase();
      const cleanedWord = lowerCaseWord.replace(/[^a-z0-9]/g, '');
      const reversedWord = cleanedWord.split('').reverse().join(''); 

      let result;
      if (cleanedWord === reversedWord) {
        result = 'true';
      } else {
        result = 'false'; 
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    }
  }

  /* commented code */

  /*
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  */

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
console.log('Server is running on http://localhost:3000');