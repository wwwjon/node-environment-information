'use strict';

const App = require('./controllers/App.js');
const System = require('./models/System.js');

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('static'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

app.get('/', (req, res) => {
  var system = App.loadInformation(new System());

  if(req.accepts('html')) {
    res.render('index', {system: system});
    return
  }

  if(req.accepts('application/json')) {
    res.send(JSON.stringify(system));
    return
  }

  res.type('txt').send('Request Accept Type not supported. Please try again with html or application/json');

});
