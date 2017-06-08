const Bookshelf = require('../../config/db');
const _ = require('lodash');

module.exports = Bookshelf.Model.extend({
    tableName: 'users',
    hidden: ['password'],
    update: async function(body) {
        this.set(body);
        await this.save();
        return;
    },
    light: function() {
        return _.pick(this.toJSON(), ["firstname"]);
    }
}, {
    create: async function(body) {
        const user = await (await new this(body).save()).fetch();
        return user;
    },

    get: async function(id) {
        return await this.query({where: {id}}).fetch();
    },

    getAll: async function() {
	return await this.query({}).fetchAll();
    }
});
