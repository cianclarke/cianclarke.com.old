var path = require('path');
var ghostConfig = require(path.join(__dirname, 'node_modules/ghost/config.js'));

var url = 'http://127.0.0.1:3000/blog',
dbfile = path.join(__dirname, './content/data/ghost-dev.db');

ghostConfig.development.url = url;
ghostConfig.production.url = url;
ghostConfig.development.paths.contentPath = path.join(__dirname, '/content');
ghostConfig.production.paths = ghostConfig.production.paths || {};
ghostConfig.production.paths.contentPath = path.join(__dirname, '/content');

ghostConfig.production.database.connection.filename = dbfile;
ghostConfig.development.database.connection.filename = dbfile;

module.exports = ghostConfig;
