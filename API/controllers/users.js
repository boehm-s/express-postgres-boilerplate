import jwt		from 'jsonwebtoken';
import bcrypt		from 'bcrypt';
import usersModel	from './../models/users';


const create = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const jwtBody = req.body.pick(['firstname', 'name', 'email']);

    jwt.sign({data: jwtBody}, 'this_is_so_secret', { expiresIn: 60 * 60 * 24 * 31});
    req.body.password = hash;
    let createdUser = await usersModel.create(req.body);

    return res.json(createdUser);
};

const getAll = async (req, res, next) => {
    let allUsers = await usersModel.getAll();
    res.json(allUsers);
};

export default {create, getAll};
