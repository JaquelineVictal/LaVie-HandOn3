const db = require("../database");
const { DataTypes } = require('sequelize');
const Pacientes = require("../models/pacientes");
const Psicologos = require("../models/psicologos");


const Atendimentos = db.define("atendimentos", {

    id_Atendimentos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_Pacientes: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key:Pacientes.id_Pacientes,
        }            
       
    },
    id_Psicologos: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key:Psicologos.id_Psicologos
        }            
                    
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
