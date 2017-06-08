const knex = require('knex')(require('./db_config')[process.env.NODE_ENV || "development"]);
const bookshelf = require('bookshelf')(knex);
console.log("HERE");
module.exports = bookshelf;
