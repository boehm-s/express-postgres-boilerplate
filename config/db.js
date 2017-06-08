import conf	from '../knexfile';
const knex	= require('knex')(conf[process.env.NODE_ENV || "development"]);
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
