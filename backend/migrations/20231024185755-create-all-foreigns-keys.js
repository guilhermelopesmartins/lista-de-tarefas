'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Nota'}, 'id_secao', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Tags',
            schema: 'tarefas'
          },
          key: 'id_tag'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'SecaoNota'}, 'id_usuario', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'tarefas'
          },
          key: 'id_usuario'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Cartao'}, 'id_raia', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Raia',
            schema: 'tarefas'
          },
          key: 'id_raia'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Raia'}, 'id_quadro', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Quadro',
            schema: 'tarefas'
          },
          key: 'id_quadro'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Quadro'}, 'id_quadro', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'tarefas'
          },
          key: 'id_usuario'
        },
        allowNull: false
    });
  }
};