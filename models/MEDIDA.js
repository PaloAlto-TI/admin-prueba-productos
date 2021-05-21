const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MEDIDA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'EMPRESA',
        key: 'id'
      }
    },
    fk_tipo_medida_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'TIPO_MEDIDA',
        key: 'id'
      }
    },
    tipo_unidad: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    abreviatura: {
      type: DataTypes.STRING(16),
      allowNull: false
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
    tableName: 'MEDIDA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "MEDIDA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
