const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona_locacion', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_persona_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      references: {
        model: 'persona',
        key: 'id'
      }
    },
    fk_locacion_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      references: {
        model: 'locacion',
        key: 'id'
      }
    },
    tipo_locacion: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
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
    tableName: 'persona_locacion',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PERSONA_LOCACION_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
