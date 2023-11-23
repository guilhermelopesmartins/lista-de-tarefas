'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert({schema: 'tarefas', tableName:'Tags'}, [
      {
        descricao: 'Importante',
        cor: '#FF0000',
      },
      {
        descricao: 'Pessoal',
        cor: '#0000FF'
      },
      {
        descricao: 'Trabalho',
        cor: '#008000'
      },
      {
        descricao: 'Estudos',
        cor: '#A020F0'
      },
      {
        descricao: 'Projetos',
        cor: '#FFC0CB'
      },
      {
        descricao: 'Compras',
        cor: '#FFFF00'
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete({schema: 'tarefas', tableName:'Tags'}, null, {});
  }
};
