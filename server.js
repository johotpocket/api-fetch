const express  = require('express');
const app      = express();
const fetch    = require('node-fetch')
const Promise  = require('bluebird');
global.Promise = Promise;
const chalk    = require('chalk');
const colors   = require('colors');
const routes = require('./starwarsfetch');

routes(app);

app.get('/api/cats', function(req, res){
  fetch('http://catfacts-api.appspot.com/api/facts?number=10')
    .then(blob => blob.json())
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(e => {
      console.log(e);
      return e;
    });
});

app.get('/api/jokes', function(req, res){
  fetch('http://webknox.com/api/jokes/random?apiKey=bejbfbdceahpirxrgjtfphnyunsppyb')
    .then(blob => blob.json())
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(e => {
      console.log(e);
      return e;
    });
});

app.get('/', function(req, res){
  res.sendFile('/index.html');
})


app.listen(3001, function(){
  console.log("Server running".rainbow);
});
