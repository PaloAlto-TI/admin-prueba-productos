const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('existencias', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_producto_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'producto',
        key: 'id'
      },
      unique: "EXISTENCIAS_fk_producto_id_fk_empresa_id_key"
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      },
      unique: "EXISTENCIAS_fk_producto_id_fk_empresa_id_key"
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
    tableName: 'existencias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EXISTENCIAS_fk_producto_id_fk_empresa_id_key",
        unique: true,
        fields: [
          { name: "fk_producto_id" },
          { name: "fk_empresa_id" },
        ]
      },
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
