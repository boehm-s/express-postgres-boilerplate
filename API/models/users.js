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
        return _.pick(this.toJSON(), ["id","photoUrl","firstname","firstName","lastname","lastName","phoneNumber","handicap","rating","favoritePlace","currentActivity","sessions"]);
    }
}, {
    create: async function(body) {
        const user = await (await new this(body).save()).fetch();
        return user;
    },

    getById: async function(id) {
        return await this.query({where: {id}}).fetch();
    },

    getAll: async function() {
	return await this.query({}).fetchAll();
    }
});
