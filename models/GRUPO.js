const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRUPO', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_linea_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'LINEA',
        key: 'id'
      }
    },
    fk_subgrupo_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'SUBGRUPO',
        key: 'id'
      }
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
    tableName: 'GRUPO',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "GRUPO_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
