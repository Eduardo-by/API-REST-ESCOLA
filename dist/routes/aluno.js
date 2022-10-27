"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoC = require('../controllers/AlunoC'); var _AlunoC2 = _interopRequireDefault(_AlunoC);

const router = new (0, _express.Router)();

router.get('/', _AlunoC2.default.index);

router.get('/:id', _AlunoC2.default.show);

router.post('/create', _AlunoC2.default.create);

router.put('/update/:id', _AlunoC2.default.update);

router.delete('/delete/:id', _AlunoC2.default.delete);

exports. default = router;
