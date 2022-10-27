import { Router } from 'express';
import UserController from '../controllers/UserC';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, UserController.index);
// router.get('/:id', loginRequired, UserController.show);

// Precisamos
router.post('/create', UserController.create);
router.put('/update/', loginRequired, UserController.update);
router.delete('/delete/', loginRequired, UserController.delete);
export default router;

/*
index - lista todos os usuarios -> GET
store ou create - cria um novo usuario -> POST
delete - apaga um usuario -> DELETE
show - mostra um usuario -> GET
update - atualiza um usuario -> PATCH ou PUT
*/
