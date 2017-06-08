import express		from 'express';
import exampleRoutes	from './example';
import userRoutes 	from './user';

const router = express.Router();

router.get('/health-check', (_, res) => res.send('OK'));

router.use('/example', exampleRoutes);
router.use('/user', userRoutes);

export default router;
