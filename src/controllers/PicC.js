/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const uploud = multer(multerConfig).single('pic');

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
        const newFoto = await Foto.create({
          originalname, filename, aluno_id,
        });
        return res.json(newFoto);
      } catch (error) {
        return res.json('Usuario não existente');
      }
    });
  }
}

export default new PicController();
