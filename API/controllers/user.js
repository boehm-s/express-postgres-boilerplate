const User = require('../models/User');

const getById = async (req, res) => {
    let users = (await User.get(req.params.id));
    users = users ? users.light():{};
    res.send(users);
}

export default {getById};
