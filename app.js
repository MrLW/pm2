const http = require('http') ;
const server = http.createServer((request,response)=>{
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World!\n');
})
// 推出程序
process.on('SIGINT', function() {
    console.log('exit...') ;
});
console.log('app1 server run on 3000',process.env.NODE_APP_INSTANCE);
server.listen(3000) ;