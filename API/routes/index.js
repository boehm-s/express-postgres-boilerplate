import express		from 'express';
import exampleRoutes	from './example';
import usersRoutes	from './users';
import userRoutes	from './users';

const router = express.Router();
const Bookshelf = require('../../config/db');
router.get('/health-check', async (req, res) => {
    try {
        console.log(await Bookshelf.knex.raw('select * from users'));
    } catch (e) {
        console.log(e);
    }
    res.send('OK');
});

router.use('/example', exampleRoutes);
router.use('/users', usersRoutes);
router.use('/user', usersRoutes); // single user operations


export default router;
