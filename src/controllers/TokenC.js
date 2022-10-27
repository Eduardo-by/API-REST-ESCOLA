/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */

import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Credencias Invalidas'] });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: ['Usuario não existe'] });
    }
    if (!(await user.passwordisValid(password))) {
      return res.status(401).json({ errors: ['Senha Invalida'] });
    }
    const { id } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
