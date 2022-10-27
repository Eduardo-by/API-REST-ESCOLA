"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable class-methods-use-this */

var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  // INDEX

  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    res.json(alunos);
  }

  // SHOW

  async show(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      if (!aluno) {
        return res.json('Usuario não existe');
      }
      return res.json(aluno);
    } catch (error) {
      return res.status(404).json({
        error: {
          msg: 'Usuario não encontrado',
        },
      });
    }
  }

  // CREATE

  async create(req, res) {
    try {
      const novoAluno = await _Aluno2.default.create(req.body);
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = novoAluno;
      return res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // UPDATE

  async update(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      const newData = await aluno.update(req.body);
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = newData;
      return res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // DELETE

  async delete(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id);

      await aluno.destroy();
      return res.json({
        Aluno_apagado: true,
      });
    } catch (error) {
      return res.status(404).json({
        error: {
          msg: 'Usuario não encontrado',
        },
      });
    }
  }
}
exports. default = new AlunoController();
