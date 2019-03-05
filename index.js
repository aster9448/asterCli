var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
    var request = require('request');
request('http://www.google.com', function (error, response, body) {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', body); // Print the HTML for the Google homepage.
res.send(body)

});

//  res.send('Hello World')
})
 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
  

