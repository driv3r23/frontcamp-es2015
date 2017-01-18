const nconf = require('nconf');

nconf.env().argv();
nconf.add('default', { type: 'file', file: __dirname + '/config.json' });
nconf.add('database', { type: 'file', file: __dirname + '/' + process.env.NODE_ENV + '/config.json' });

module.exports = nconf;