const http = require('http');

const server = http.createServer((req, res) =>{


    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'Conten-Type': 'text/plain'});
        res.end("Hello, World from a raw server");
} else {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Page Not Found');
}

});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Raw server running on http://localhost:${PORT}`);
});