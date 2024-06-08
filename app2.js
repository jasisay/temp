

const _ = require('lodash');
const http = require('http');

const server = http.createServer((req,res)=>{
   if( req.url == '/') res.end('Welcome to our home page');
   else if(req.url == '/about')res.end('This is my about page');
   else res.end('<h1>oops!</h1>')
}); 

const items = [1,2,[3,4]];
const newItems = _.flatMapDeep(items);
console.log(newItems);

server.listen(5000);

