const http = require('http'); //This is an inbuilt module

const server = http.createServer((req, res) =>{
//req stands for request. Incoming request from the front end to the server
//res stands for respond. The answer or respond that the server sends tothe user or frontend after requesting

    if(req.method === 'GET' && req.url === '/'){
        //here it is checking the route the front end is requesting from.
        res.writeHead(200, {'Conten-Type': 'text/plain'}); //Manual headers
        res.end("Hello, World from a raw server"); //This is what the server sends to the frontend after checking is valid
} else {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Page Not Found'); //This is the error the server will throw when it doesnt not satisfy the check or route
}

});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Raw server running on http://localhost:${PORT}`);
});