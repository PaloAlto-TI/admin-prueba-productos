const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PERSONA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    documento: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "PERSONA_documento_key"
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    apellido: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    correo: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefonos_js: {
      type: DataTypes.JSONB,
      allowNull: true
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
    tableName: 'PERSONA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PERSONA_documento_key",
        unique: true,
        fields: [
          { name: "documento" },
        ]
      },
      {
        name: "PERSONA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
