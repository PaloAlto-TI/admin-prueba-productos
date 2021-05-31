const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('local', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true,
      unique: "LOCAL_id_fk_locacion_id_key"
    },
    fk_locacion_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'locacion',
        key: 'id'
      },
      unique: "LOCAL_id_fk_locacion_id_key"
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    tipo: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    horario_js: {
      type: DataTypes.JSONB,
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
    tableName: 'local',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "LOCAL_id_fk_locacion_id_key",
        unique: true,
        fields: [
          { name: "id" },
          { name: "fk_locacion_id" },
        ]
      },
      {
        name: "LOCAL_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
