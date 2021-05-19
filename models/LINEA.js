const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LINEA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    pseudo: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'LINEA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LINEA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};