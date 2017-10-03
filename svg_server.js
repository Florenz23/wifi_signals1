require("babel-register");
var express = require('express');
var app = express();

var request = require('request');

// var data = require('./src/data/data').default;
// let array = []
// fs.createReadStream('./src/data/new_files/170920.json')
//   .pipe(ndjson.parse())
//   .on('data', function(obj) {
//     array.push[obj]
//     // obj is a javascript object
//     start(app,data)
//   })
// data = array
// console.log(data)

//change file here
  var data = require('./src/data/new_files/170915.json');

  var svgRenderer = require('./src/scripts/functions/svg_renderer').default;
  //
  // app.get('/svg/0', function (req, res) {
  //   var svg = svgRenderer(data,0);
  //   res.send(svg);
  // });
  // app.get('/svg/1', function (req, res) {
  //   var svg = svgRenderer(data,1);
  //   res.send(svg);
  // });
  // app.get('/svg/2', function (req, res) {
  //   var svg = svgRenderer(data,2);
  //   res.send(svg);
  // });
  app.get('/', function(req, res){
    let view = req.query.view
    let time = req.query.time
    let period = req.query.period
    var svg = svgRenderer(data,view,time,period);
    res.send(svg);
  });


  var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
