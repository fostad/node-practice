var fs = require('fs')

fs.readdir(process.argv[2], function(err,list){
  if(err)
    return console.error(err);
  list.forEach(function(fileName) {
    arr = fileName.split('.');
    if(arr[1] == process.argv[3]) {
      console.log(fileName);
    }
  })
})
