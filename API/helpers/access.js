import usersModel from "./../models/users";


const getCurrentUser = async (req, _, next = null) => {
    let auth = req.get('Authorization');

    if (!auth)
	req.user = {
	    role: 'anonymous',
	    data: null
	};
    else {
	let user = await usersModel.getByToken(auth);

	req.user = {
	    role: user ? user.role : 'anonymous',
	    data: user ? user : null
	};
    }
    if (next)
	next();
};

const authorize = roles => async (req, res, next) => {
    if (!req.hasOwnProperty('user'))
	await getCurrentUser(req);
    if (1 === roles.length && 'admin' === roles[0] && 'admin' !== req.user.role) /* 403 for admin-only routes */
	return res.status(403).json({message: "You're not authorize to access this route."});
    else if (!roles.includes(req.user.role))
	return res.status(401).json({message: "You're not authorize to access this route."});
    else
	return next();
};


export default {authorize, getCurrentUser};
