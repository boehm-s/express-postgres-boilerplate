const User = require('../models/User');

const getById = async (req, res) => {
    let user = (await User.get(req.params.id));

    // user = user ? users.light():{};
    res.send(user);
};

const create = async (req, res) => {
    const user = await (User.create(req.body));

    return res.send(user);
};

export default {getById, create};
