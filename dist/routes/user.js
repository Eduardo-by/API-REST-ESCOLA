"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserC = require('../controllers/UserC'); var _UserC2 = _interopRequireDefault(_UserC);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', loginRequired, UserController.index);
// router.get('/:id', loginRequired, UserController.show);

// Precisamos
router.post('/create', _UserC2.default.create);
router.put('/update/', _loginRequired2.default, _UserC2.default.update);
router.delete('/delete/', _loginRequired2.default, _UserC2.default.delete);
exports. default = router;

/*
index - lista todos os usuarios -> GET
store ou create - cria um novo usuario -> POST
delete - apaga um usuario -> DELETE
show - mostra um usuario -> GET
update - atualiza um usuario -> PATCH ou PUT
*/
