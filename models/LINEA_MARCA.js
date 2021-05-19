const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LINEA_MARCA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    fk_marca_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'MARCA',
        key: 'id'
      }
    },
    fk_linea_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'LINEA',
        key: 'id'
      }
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
    tableName: 'LINEA_MARCA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LINEA_MARCA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
