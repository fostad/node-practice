var fs = require('fs')

module.exports = function (dirName, fileExtName, callback){
    fs.readdir(dirName, function(err,list){

    if(err)
      return callback(err);

    var filteredList = []
    list.forEach(function(fileName) {
      arr = fileName.split('.');
      if(arr[1] == fileExtName) {
        filteredList.push(fileName)
      }
    })

    return callback(null, filteredList)
  })
}
