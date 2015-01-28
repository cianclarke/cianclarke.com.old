
/**
 * Module dependencies.
 */

var express = require('express'),
gallery = require('node-gallery'),
routes = require('./routes'),
partials = require('express-partials'),
ejs = require('ejs').__express,
path = require('path');

bodyParser = require('body-parser');

http = require('http'),
util = require('util');

var app = express(),
port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
host = process.env.HOSTNAME || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
views = __dirname + '/views';
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(__dirname + '/public'));
app.use(gallery.middleware({static: 'public', directory: '/photos', rootURL: "/gallery"}));
app.use(bodyParser());
app.use(partials());
app.engine('.ejs', ejs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', routes.index);
app.get('/home', routes.index);
app.get('/blog', routes.blog);
app.get('/talks', routes.talks);
app.get('/beers', routes.beers);
app.get('/contact', routes.contact);
app.get('/cv', routes.cv);
app.get('/gallery*', routes.gallery);
app.get('/talks', routes.talks);


app.listen(port, host, function(){
  console.log("Express server listening on port " + port);
});
