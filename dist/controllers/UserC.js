"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // CREATE
  async create(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      res.json({ id, nome, email });
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      const newData = await users.update(req.body);
      const { id, nome, email } = newData;
      return res.json({ id, nome, email });
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const users = await _User2.default.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ['Missing User'],
        });
      }

      await users.destroy();
      const { id, nome, email } = users;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }
}

exports. default = new UserController();
