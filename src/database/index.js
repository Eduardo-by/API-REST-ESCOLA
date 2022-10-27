import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';
import User from '../models/User';

const models = [Aluno, User, Foto];

const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
models.forEach((model) => model.associate && model.associate(conection.models));
