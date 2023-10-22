const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = require('./public/javascripts/port')
const ContentType = require('./public/javascripts/contenttype')
const validation = require('./public/javascripts/validation');
const db = require('./public/javascripts/db');

// const readFileFunc = fs.readFile(mp3, (err, data) => {
//   if(err) {
//     console.error("error");
//   } else {
//     return data;
//   }
// });

const server = http.createServer((request, response) => {
  switch (request.method) {
    case 'GET':
      if (request.url === '/') {
        response.writeHead(200, ContentType.html);
        response.end(fs.readFileSync('./public/index.html', 'utf8'));
      }
      else if (request.url === '/stylesheets/style.css') {
        response.writeHead(200, ContentType.css);
        response.end(fs.readFileSync('./public/stylesheets/style.css', 'utf8'));
      }
      else if (request.url === '/javascripts/script.js') {
        response.writeHead(200, ContentType.js);
        response.end(fs.readFileSync('./public/javascripts/script.js', 'utf8'));
      }
      break;

    case 'POST':
      if (request.url === '/join') {
        response.writeHead(200, ContentType.html);
        response.end(fs.readFileSync('./public/join.html', 'utf8'));
      }
      else if (request.url === '/') {
        let body = "";
      
        request.on('data', (chunk) => {
          body += chunk.toString();
        });
        request.on('end', () => {
          const { id, pw1, pw2, email } = querystring.parse(body);
          const data = db.one + id + db.two;
          fs.writeFileSync('./public/success.html', data)
          if (validation(id, pw1, pw2, email)) {
            signUpAsset.id = id;
            signUpAsset.pw = pw1;
            signUpAsset.email = email;
            response.writeHead(200, ContentType.html);
            response.end(fs.readFileSync('./public/success.html', 'utf8'));
          } else {
            response.end(fs.readFileSync('./public/index.html', 'utf8'));
          }
        });
      }
      break;

    default:
      response.writeHead(404, ContentType.html);
      response.end('404 ERROR');
      break;
  }
});

server.listen(port, () => {
  console.log('서버 가동 중 : http://localhost:8080/');
});