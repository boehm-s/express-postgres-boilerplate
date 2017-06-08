const knex = require('knex')(require('./db_config')[process.env.NODE_ENV || "development"]);
const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;
