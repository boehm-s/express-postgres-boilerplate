import express		from 'express';
import exampleRoutes	from './example';

const router = express.Router();
const Bookshelf = require('../../config/db');

router.get('/health-check', async (req, res) => {
      const users = (await Bookshelf.knex.raw('select * from users')).rows;
      res.send(users);
});

router.use('/example', exampleRoutes);

export default router;
