const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('linea_marca', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_marca_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'marca',
        key: 'id'
      }
    },
    fk_linea_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'linea',
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
    tableName: 'linea_marca',
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
