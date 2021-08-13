const http = require('http');

const server = http.createServer((req, res)=> {
    console.log(req);
    if(req.url === '/') {
        res.end('Welcome to my home page')
    }
   if (req.url === '/about') {
       res.end('here is our short history')
   } 
   res.end(`
   <h1> Oops! </h1> 
   <p> Can't seem to find page </p>
   <a href='/'>back home </a>
   <a href='/about'>about page </a>
   `)
})

server.listen(5000)