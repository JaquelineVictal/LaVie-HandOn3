const db = require('../database/index')
const { DataTypes } = require('sequelize')

const Atendimentos = db.define(
  'atendimentos',
  {
    id_Atendimentos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_Pacientes: {
      type: DataTypes.INTEGER
    },
    id_Psicologos: {
      type: DataTypes.INTEGER
    },
    dataAtendimento: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'atendimentos',
    timestamps: false
  }
)

module.exports = Atendimentos
