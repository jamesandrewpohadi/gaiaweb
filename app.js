var createError = require('http-errors');
var express = require('express')
var path = require('path');
var app = express();

app.set('view engine', 'ejs')
var routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Example app listening on port 5000!')
});

module.export = app;