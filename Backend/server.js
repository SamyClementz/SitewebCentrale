const express = require('express')
const app = express()
var FileStore = require('express-file-store');
 
// using file system
var fileStore = FileStore('fs', {
  path: __dirname + '/MachineLearning'
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

