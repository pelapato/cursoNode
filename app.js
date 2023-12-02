let http = require('http')
http.createServer(function(req,res){
  //end,send
  res.end('online agora no servidor aberto!!!')
}).listen(3000)

console.log('servidor aberto online')