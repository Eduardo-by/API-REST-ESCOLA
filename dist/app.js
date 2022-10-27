"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// DOTENV IMPORT
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
// EXPRESS IMPORT
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
// IMPORT CORS
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
// IMPORT HELMET
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

// IMPORT DATABASE
require('./database');

// HOME ROUTER
var _path = require('path');
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);

// USER ROUTER
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);

// TOKEN ROUTER
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);

// ALUNO ROUTER
var _aluno = require('./routes/aluno'); var _aluno2 = _interopRequireDefault(_aluno);

// PIC ROUTER
var _pic = require('./routes/pic'); var _pic2 = _interopRequireDefault(_pic);

const whiteList = ['http://localhost:3000'];

const coreOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, coreOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users', _user2.default);
    this.app.use('/tokens', _token2.default);
    this.app.use('/alunos', _aluno2.default);
    this.app.use('/pic', _pic2.default);
  }
}

exports. default = new App().app;
