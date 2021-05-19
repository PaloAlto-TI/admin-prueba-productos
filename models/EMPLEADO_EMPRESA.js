const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EMPLEADO_EMPRESA', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    fk_empresa_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'EMPRESA',
        key: 'id'
      },
      unique: "EMPLEADO_EMPRESA_fk_empresa_id_fk_persona_id_key"
    },
    fk_persona_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'PERSONA',
        key: 'id'
      },
      unique: "EMPLEADO_EMPRESA_fk_empresa_id_fk_persona_id_key"
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
    tableName: 'EMPLEADO_EMPRESA',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EMPLEADO_EMPRESA_fk_empresa_id_fk_persona_id_key",
        unique: true,
        fields: [
          { name: "fk_empresa_id" },
          { name: "fk_persona_id" },
        ]
      },
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
