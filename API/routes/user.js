import express from 'express';
import userController from './../controllers/user';

const router = express.Router();

router.route('/')
  .post(userController.create);

router.route('/:id')
  .get(userController.getById);

export default router;
