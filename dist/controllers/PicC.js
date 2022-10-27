"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const uploud = _multer2.default.call(void 0, _multerConfig2.default).single('pic');

class PicController {
  create(req, res) {
    return uploud(req, res, async (erro) => {
      try {
        if (erro) {
          return res.status(400).json({
            errors: [erro.code],
          });
        }

        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const newFoto = await _Foto2.default.create({
          originalname, filename, aluno_id,
        });
        return res.json(newFoto);
      } catch (error) {
        return res.json('Usuario não existente');
      }
    });
  }
}

exports. default = new PicController();
