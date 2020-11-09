const http = require('http');
const url = require('url');
const fs = require('fs');

let addr = 'http://localhost:8080';

// using http to create the server
http.createServer((request, response) => {
    let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';

    // using fs to log the request to a seperate file
    fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', 
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Added to log.');
        }
    });

    // conditional to check request for documentation
    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = '/index.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        }

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });

}).listen(8080);

console.log('My test servier is running on port 8080');

