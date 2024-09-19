const http = require('http');

const fs = require('fs')

const PORT = 4000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html','utf-8')

const server = http.createServer((req, res) => {

    // Set content type for response
    res.setHeader('Content-Type', 'text/html');

    // Handling different routes based on req.url
    if(req.url === '/'){
        res.end(home);
    } else if(req.url === '/about'){
        res.end('<h1>ABOUT PAGE</h1>');
    } else if(req.url === '/contact'){
        res.end('<h1>CONTACT PAGE</h1>'); // Typo in 'contact'
    } else if(req.url === '/service'){
        res.end('<h1>SERVICE PAGE</h1>');
    } else {
        res.end('<h1>404 PAGE NOT FOUND</h1>');
    }
    
});

server.listen(PORT, hostname, () => {
    console.log(`Server is running on http://${hostname}:${PORT}`);
});
