/* eslint-disable class-methods-use-this */

import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.json('Estou funcionando');
  }
}

export default new HomeController();
