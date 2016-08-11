var net = require('net')
var date = new Date()
var server = net.createServer(function(socket){
  socket.write(editDate().toString())
  socket.end()
})

function editDate() {
  return date.getFullYear() + '-' + fillZero(date.getMonth() + 1) + '-' +
    fillZero(date.getDate()) + ' ' + fillZero(date.getHours()) + ':' +
    fillZero(date.getMinutes()) + '\n';
}

function fillZero(n) {
  if(n > 9)
    return n
  else {
    return '0' + n
  }
}
server.listen(process.argv[2])
