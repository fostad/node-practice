var http = require('http')
var bl = require('bl')
var count = 3
var rcvData = []

function httpRecieve(i) {
  http.get(process.argv[i + 2], function(response){
    response.pipe(bl(function(err, data) {
      if(err)
        return console.error(err);

      rcvData[i] = data.toString();

      count--
      if(count == 0) {
        console.log(rcvData[0]);
        console.log(rcvData[1]);
        console.log(rcvData[2]);
      }
    }))
  })
}
for(i = 0; i < 3; i++) {
  httpRecieve(i)
}
