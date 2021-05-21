const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOCACION', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    direccion_1: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    direccion_2: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    ciudad: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    parroquia: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    coordenadas: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
      allowNull: false
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
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
    tableName: 'LOCACION',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LOCACION_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
