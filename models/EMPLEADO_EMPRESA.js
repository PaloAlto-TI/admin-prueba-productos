const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado_empresa', {
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
        model: 'empresa',
        key: 'id'
      }
    },
    fk_persona_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'persona',
        key: 'id'
      }
    },
    codigo_empleado: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    fecha_contratacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    salario: {
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
    tableName: 'empleado_empresa',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EMPLEADO_EMPRESA_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
