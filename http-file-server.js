var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {
    var readStr = fs.createReadStream(process.argv[3])
    readStr.pipe(response)
    
})

server.listen(process.argv[2])
