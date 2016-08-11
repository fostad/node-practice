var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(request, response) {
  var time = new Date(url.parse(request.url, true).query.iso)

  var data

  if (/^\/api\/parsetime/.test(request.url))
    data = parsetime(time)
  else if (/^\/api\/unixtime/.test(request.url))
    data = unixtime(time)

  if (data) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(data))
  } else {
    response.writeHead(404)
    response.end()
  }

})

server.listen(process.argv[2])
