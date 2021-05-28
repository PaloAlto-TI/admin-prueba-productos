const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('generate_object_id'),
      primaryKey: true
    },
    fk_proveedor_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'id'
      }
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
    fk_grupo_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'grupo',
        key: 'id'
      }
    },
    fk_unidad_venta_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'medida',
        key: 'id'
      }
    },
    fk_unidad_medida_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'medida',
        key: 'id'
      }
    },
    codigo_interno: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "PRODUCTO_codigo_interno_key"
    },
    codigo_externo: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    procedencia: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    costo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    limite_descuento1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    limite_descuento2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    limite_descuento3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    limite_descuento4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    limite_descuento5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dimension_unidad_venta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    en_web: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    en_sistema_externo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    url_imagen_js: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    atributos_js: {
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
    },
    tipo_inventario: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'producto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PRODUCTOS_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "PRODUCTO_codigo_interno_key",
        unique: true,
        fields: [
          { name: "codigo_interno" },
        ]
      },
    ]
  });
};
