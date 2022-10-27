"use strict";const bcryptjs = require('bcryptjs');

module.exports = {

  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'Astolfo',
      email: 'astolfo@gmail.com',
      password_hash: await bcryptjs.hash('12346780', 10),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Ronaldo',
      email: 'ronaldo@gmail.com',
      password_hash: await bcryptjs.hash('eusouinsanso', 10),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Marcela',
      email: 'marcela@gmail.com',
      password_hash: await bcryptjs.hash('avidaeumacompletamintira', 10),
      created_at: new Date(),
      updated_at: new Date(),

    }],

    {},
  ),
  down: () => { },
};
