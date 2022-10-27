"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _PicC = require('../controllers/PicC'); var _PicC2 = _interopRequireDefault(_PicC);

const router = new (0, _express.Router)();

router.post('/uploud', _loginRequired2.default, _PicC2.default.create);

exports. default = router;
