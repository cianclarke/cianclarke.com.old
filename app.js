
/**
 * Module dependencies.
 */

var express = require('express'),
gallery = require('node-gallery'),
routes = require('./routes'),
partials = require('express-partials'),

http = require('http'),
util = require('util');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(__dirname + '/public'));
  app.use(gallery.middleware({static: 'public', directory: '/photos', rootURL: "/gallery"}));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(partials());
  app.use(express.methodOverride());
  app.use(app.router);



});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/home', routes.index);
app.get('/blog', routes.blog);
app.get('/contact', routes.contact);
app.get('/cv', routes.cv);
app.get('/gallery*', routes.gallery);
app.get('/webdesign', routes.webdesign);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
