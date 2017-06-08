const Bookshelf = require('../../config/db');
const _ = require('lodash');
module.exports = Bookshelf.Model.extend({
    tableName: 'users',
    hidden: ['password'],
    update: async function(body) {
        const realbody = _.pick(body, ['firstname', 'lastname', 'email', 'birthDate', 'gender', 'phoneNumber', 'phonePrefixNumber', 'password', 'weight', 'height', 'shape', 'handicap', 'pushNotificationToken', 'photoUrl']);
        this.set(realbody);
        await this.save();
        return;
    },
    light: function() {
        return _.pick(this.toJSON(), ["id","photoUrl","firstname","firstName","lastname","lastName","phoneNumber","handicap","rating","favoritePlace","currentActivity","sessions"]);
    }
}, {
    create: async function(body) {
        const realbody = _.pick(body, ['firstname', 'lastname', 'email', 'birthDate', 'gender', 'phoneNumber', 'phonePrefixNumber', 'password', 'parentCode', 'photoUrl']);
        realbody.password = await bcrypt.hash(realbody.password, 10);
        const user = await (await new this(realbody).save()).fetch();
        return user;
    },
    get: async function(id) {
        return await this.query({where: {id}}).fetch();
    },
});
