var fs = require('fs')
arr = fs.readFileSync(process.argv[2]).toString().split('\n')
console.log(arr.length - 1);
