var DataTypes = require("sequelize").DataTypes;
var _EMPLEADO_EMPRESA = require("./EMPLEADO_EMPRESA");
var _EMPRESA = require("./EMPRESA");
var _EXISTENCIAS = require("./EXISTENCIAS");
var _GLOSARIO = require("./GLOSARIO");
var _GRUPO = require("./GRUPO");
var _LINEA = require("./LINEA");
var _LINEA_MARCA = require("./LINEA_MARCA");
var _LOCACION = require("./LOCACION");
var _LOCAL = require("./LOCAL");
var _MARCA = require("./MARCA");
var _MEDIDA = require("./MEDIDA");
var _PERSONA = require("./PERSONA");
var _PERSONA_LOCACION = require("./PERSONA_LOCACION");
var _PRODUCTO = require("./PRODUCTO");
var _PROVEEDOR = require("./PROVEEDOR");
var _SUBGRUPO = require("./SUBGRUPO");
var _TIPO_MEDIDA = require("./TIPO_MEDIDA");

function initModels(sequelize) {
  var EMPLEADO_EMPRESA = _EMPLEADO_EMPRESA(sequelize, DataTypes);
  var EMPRESA = _EMPRESA(sequelize, DataTypes);
  var EXISTENCIAS = _EXISTENCIAS(sequelize, DataTypes);
  var GLOSARIO = _GLOSARIO(sequelize, DataTypes);
  var GRUPO = _GRUPO(sequelize, DataTypes);
  var LINEA = _LINEA(sequelize, DataTypes);
  var LINEA_MARCA = _LINEA_MARCA(sequelize, DataTypes);
  var LOCACION = _LOCACION(sequelize, DataTypes);
  var LOCAL = _LOCAL(sequelize, DataTypes);
  var MARCA = _MARCA(sequelize, DataTypes);
  var MEDIDA = _MEDIDA(sequelize, DataTypes);
  var PERSONA = _PERSONA(sequelize, DataTypes);
  var PERSONA_LOCACION = _PERSONA_LOCACION(sequelize, DataTypes);
  var PRODUCTO = _PRODUCTO(sequelize, DataTypes);
  var PROVEEDOR = _PROVEEDOR(sequelize, DataTypes);
  var SUBGRUPO = _SUBGRUPO(sequelize, DataTypes);
  var TIPO_MEDIDA = _TIPO_MEDIDA(sequelize, DataTypes);

  EMPLEADO_EMPRESA.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(EMPLEADO_EMPRESA, { as: "EMPLEADO_EMPRESAs", foreignKey: "fk_empresa_id"});
  EXISTENCIAS.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(EXISTENCIAS, { as: "EXISTENCIA", foreignKey: "fk_empresa_id"});
  LINEA.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(LINEA, { as: "LINEAs", foreignKey: "fk_empresa_id"});
  LOCAL.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(LOCAL, { as: "LOCALs", foreignKey: "fk_empresa_id"});
  MARCA.belongsTo(EMPRESA, { as: "fk_empresa_EMPRESA", foreignKey: "fk_empresa"});
  EMPRESA.hasMany(MARCA, { as: "MARCAs", foreignKey: "fk_empresa"});
  MEDIDA.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(MEDIDA, { as: "MEDIDAs", foreignKey: "fk_empresa_id"});
  PROVEEDOR.belongsTo(EMPRESA, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  EMPRESA.hasMany(PROVEEDOR, { as: "PROVEEDORs", foreignKey: "fk_empresa_id"});
  PRODUCTO.belongsTo(GRUPO, { as: "fk_grupo", foreignKey: "fk_grupo_id"});
  GRUPO.hasMany(PRODUCTO, { as: "PRODUCTOs", foreignKey: "fk_grupo_id"});
  GRUPO.belongsTo(LINEA, { as: "fk_linea", foreignKey: "fk_linea_id"});
  LINEA.hasMany(GRUPO, { as: "GRUPOs", foreignKey: "fk_linea_id"});
  LINEA_MARCA.belongsTo(LINEA, { as: "fk_linea", foreignKey: "fk_linea_id"});
  LINEA.hasMany(LINEA_MARCA, { as: "LINEA_MARCAs", foreignKey: "fk_linea_id"});
  PRODUCTO.belongsTo(LINEA, { as: "fk_linea", foreignKey: "fk_linea_id"});
  LINEA.hasMany(PRODUCTO, { as: "PRODUCTOs", foreignKey: "fk_linea_id"});
  EMPRESA.belongsTo(LOCACION, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  LOCACION.hasMany(EMPRESA, { as: "EMPRESAs", foreignKey: "fk_locacion_id"});
  LOCAL.belongsTo(LOCACION, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  LOCACION.hasMany(LOCAL, { as: "LOCALs", foreignKey: "fk_locacion_id"});
  PERSONA_LOCACION.belongsTo(LOCACION, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  LOCACION.hasMany(PERSONA_LOCACION, { as: "PERSONA_LOCACIONs", foreignKey: "fk_locacion_id"});
  LINEA_MARCA.belongsTo(MARCA, { as: "fk_marca", foreignKey: "fk_marca_id"});
  MARCA.hasMany(LINEA_MARCA, { as: "LINEA_MARCAs", foreignKey: "fk_marca_id"});
  PRODUCTO.belongsTo(MARCA, { as: "fk_marca", foreignKey: "fk_marca_id"});
  MARCA.hasMany(PRODUCTO, { as: "PRODUCTOs", foreignKey: "fk_marca_id"});
  PRODUCTO.belongsTo(MEDIDA, { as: "fk_unidad_medida", foreignKey: "fk_unidad_medida_id"});
  MEDIDA.hasMany(PRODUCTO, { as: "PRODUCTOs", foreignKey: "fk_unidad_medida_id"});
  PRODUCTO.belongsTo(MEDIDA, { as: "fk_unidad_ventum", foreignKey: "fk_unidad_venta_id"});
  MEDIDA.hasMany(PRODUCTO, { as: "fk_unidad_venta_PRODUCTOs", foreignKey: "fk_unidad_venta_id"});
  EMPLEADO_EMPRESA.belongsTo(PERSONA, { as: "fk_persona", foreignKey: "fk_persona_id"});
  PERSONA.hasMany(EMPLEADO_EMPRESA, { as: "EMPLEADO_EMPRESAs", foreignKey: "fk_persona_id"});
  PERSONA_LOCACION.belongsTo(PERSONA, { as: "fk_persona", foreignKey: "fk_persona_id"});
  PERSONA.hasMany(PERSONA_LOCACION, { as: "PERSONA_LOCACIONs", foreignKey: "fk_persona_id"});
  EXISTENCIAS.belongsTo(PRODUCTO, { as: "fk_producto", foreignKey: "fk_producto_id"});
  PRODUCTO.hasMany(EXISTENCIAS, { as: "EXISTENCIA", foreignKey: "fk_producto_id"});
  PRODUCTO.belongsTo(PROVEEDOR, { as: "fk_proveedor", foreignKey: "fk_proveedor_id"});
  PROVEEDOR.hasMany(PRODUCTO, { as: "PRODUCTOs", foreignKey: "fk_proveedor_id"});
  GRUPO.belongsTo(SUBGRUPO, { as: "fk_subgrupo", foreignKey: "fk_subgrupo_id"});
  SUBGRUPO.hasMany(GRUPO, { as: "GRUPOs", foreignKey: "fk_subgrupo_id"});
  MEDIDA.belongsTo(TIPO_MEDIDA, { as: "fk_tipo_medida", foreignKey: "fk_tipo_medida_id"});
  TIPO_MEDIDA.hasMany(MEDIDA, { as: "MEDIDAs", foreignKey: "fk_tipo_medida_id"});

  return {
    EMPLEADO_EMPRESA,
    EMPRESA,
    EXISTENCIAS,
    GLOSARIO,
    GRUPO,
    LINEA,
    LINEA_MARCA,
    LOCACION,
    LOCAL,
    MARCA,
    MEDIDA,
    PERSONA,
    PERSONA_LOCACION,
    PRODUCTO,
    PROVEEDOR,
    SUBGRUPO,
    TIPO_MEDIDA,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
