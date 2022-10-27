import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';

import picController from '../controllers/PicC';

const router = new Router();

router.post('/uploud', loginRequired, picController.create);

export default router;
