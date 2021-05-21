const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EMPRESA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_locacion_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      references: {
        model: 'LOCACION',
        key: 'id'
      }
    },
    razon_social: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ruc: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    atributos_web_js: {
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
    tableName: 'EMPRESA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EMPRESA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
