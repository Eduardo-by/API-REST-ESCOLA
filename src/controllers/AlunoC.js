/* eslint-disable class-methods-use-this */

import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  // INDEX

  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    res.json(alunos);
  }

  // SHOW

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const novoAluno = await Aluno.create(req.body);
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
      const aluno = await Aluno.findByPk(req.params.id);
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
      const aluno = await Aluno.findByPk(req.params.id);

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
export default new AlunoController();
