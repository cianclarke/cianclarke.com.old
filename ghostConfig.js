var path = require('path'),
ghostConfig = require(path.join(__dirname, 'node_modules/ghost/config.example.js')),
port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
host = process.env.HOSTNAME || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
url = 'http://' + host + ':' + port + '/blog',
dbfile = path.join(__dirname, './content/data/ghost-dev.db');

ghostConfig.development.url = url;
ghostConfig.production.url = url;
ghostConfig.development.paths.contentPath = path.join(__dirname, '/content');
ghostConfig.production.paths = ghostConfig.production.paths || {};
ghostConfig.production.paths.contentPath = path.join(__dirname, '/content');

ghostConfig.production.database.connection.filename = dbfile;
ghostConfig.development.database.connection.filename = dbfile;

module.exports = ghostConfig;
