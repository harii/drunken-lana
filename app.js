
/**
 * Module dependencies.
 */

var express = require('express')
  , main = require('./routes/index')
//  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require("mongoose");


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', main.home);
app.get('/edibles/find', main.displayEdibles);
app.get('/edibles/new', main.submitPinterestItem);
app.post('/edibles/new', main.create);

//app.post('/ingredients/change', main.changeIngredients);  // can make this saveable and specific to a user later



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
