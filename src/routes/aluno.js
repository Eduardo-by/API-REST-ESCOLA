import { Router } from 'express';
import AlunoController from '../controllers/AlunoC';

const router = new Router();

router.get('/', AlunoController.index);

router.get('/:id', AlunoController.show);

router.post('/create', AlunoController.create);

router.put('/update/:id', AlunoController.update);

router.delete('/delete/:id', AlunoController.delete);

export default router;
