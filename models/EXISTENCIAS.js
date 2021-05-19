const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EXISTENCIAS', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    fk_producto_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'PRODUCTO',
        key: 'id'
      }
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'EMPRESA',
        key: 'id'
      }
    },
    stock_empresa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00
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
    tableName: 'EXISTENCIAS',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EXISTENCIAS_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
