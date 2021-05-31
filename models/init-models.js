var DataTypes = require("sequelize").DataTypes;
var _empleado_empresa = require("./empleado_empresa");
var _empresa = require("./empresa");
var _existencias = require("./existencias");
var _glosario = require("./glosario");
var _grupo = require("./grupo");
var _linea = require("./linea");
var _linea_marca = require("./linea_marca");
var _locacion = require("./locacion");
var _local = require("./local");
var _marca = require("./marca");
var _medida = require("./medida");
var _persona = require("./persona");
var _persona_locacion = require("./persona_locacion");
var _producto = require("./producto");
var _proveedor = require("./proveedor");
var _subgrupo = require("./subgrupo");
var _tipo_medida = require("./tipo_medida");

function initModels(sequelize) {
  var empleado_empresa = _empleado_empresa(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var existencias = _existencias(sequelize, DataTypes);
  var glosario = _glosario(sequelize, DataTypes);
  var grupo = _grupo(sequelize, DataTypes);
  var linea = _linea(sequelize, DataTypes);
  var linea_marca = _linea_marca(sequelize, DataTypes);
  var locacion = _locacion(sequelize, DataTypes);
  var local = _local(sequelize, DataTypes);
  var marca = _marca(sequelize, DataTypes);
  var medida = _medida(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var persona_locacion = _persona_locacion(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var proveedor = _proveedor(sequelize, DataTypes);
  var subgrupo = _subgrupo(sequelize, DataTypes);
  var tipo_medida = _tipo_medida(sequelize, DataTypes);

  empleado_empresa.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(empleado_empresa, { as: "empleado_empresas", foreignKey: "fk_empresa_id"});
  existencias.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(existencias, { as: "existencia", foreignKey: "fk_empresa_id"});
  linea.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(linea, { as: "lineas", foreignKey: "fk_empresa_id"});
  local.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(local, { as: "locals", foreignKey: "fk_empresa_id"});
  marca.belongsTo(empresa, { as: "fk_empresa_empresa", foreignKey: "fk_empresa"});
  empresa.hasMany(marca, { as: "marcas", foreignKey: "fk_empresa"});
  medida.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(medida, { as: "medidas", foreignKey: "fk_empresa_id"});
  proveedor.belongsTo(empresa, { as: "fk_empresa", foreignKey: "fk_empresa_id"});
  empresa.hasMany(proveedor, { as: "proveedors", foreignKey: "fk_empresa_id"});
  producto.belongsTo(grupo, { as: "fk_grupo", foreignKey: "fk_grupo_id"});
  grupo.hasMany(producto, { as: "productos", foreignKey: "fk_grupo_id"});
  grupo.belongsTo(linea, { as: "fk_linea", foreignKey: "fk_linea_id"});
  linea.hasMany(grupo, { as: "grupos", foreignKey: "fk_linea_id"});
  linea_marca.belongsTo(linea, { as: "fk_linea", foreignKey: "fk_linea_id"});
  linea.hasMany(linea_marca, { as: "linea_marcas", foreignKey: "fk_linea_id"});
  producto.belongsTo(linea, { as: "fk_linea", foreignKey: "fk_linea_id"});
  linea.hasMany(producto, { as: "productos", foreignKey: "fk_linea_id"});
  empresa.belongsTo(locacion, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  locacion.hasMany(empresa, { as: "empresas", foreignKey: "fk_locacion_id"});
  local.belongsTo(locacion, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  locacion.hasMany(local, { as: "locals", foreignKey: "fk_locacion_id"});
  persona_locacion.belongsTo(locacion, { as: "fk_locacion", foreignKey: "fk_locacion_id"});
  locacion.hasMany(persona_locacion, { as: "persona_locacions", foreignKey: "fk_locacion_id"});
  linea_marca.belongsTo(marca, { as: "fk_marca", foreignKey: "fk_marca_id"});
  marca.hasMany(linea_marca, { as: "linea_marcas", foreignKey: "fk_marca_id"});
  producto.belongsTo(marca, { as: "fk_marca", foreignKey: "fk_marca_id"});
  marca.hasMany(producto, { as: "productos", foreignKey: "fk_marca_id"});
  producto.belongsTo(medida, { as: "fk_unidad_medida", foreignKey: "fk_unidad_medida_id"});
  medida.hasMany(producto, { as: "productos", foreignKey: "fk_unidad_medida_id"});
  producto.belongsTo(medida, { as: "fk_unidad_ventum", foreignKey: "fk_unidad_venta_id"});
  medida.hasMany(producto, { as: "fk_unidad_venta_productos", foreignKey: "fk_unidad_venta_id"});
  empleado_empresa.belongsTo(persona, { as: "fk_persona", foreignKey: "fk_persona_id"});
  persona.hasMany(empleado_empresa, { as: "empleado_empresas", foreignKey: "fk_persona_id"});
  persona_locacion.belongsTo(persona, { as: "fk_persona", foreignKey: "fk_persona_id"});
  persona.hasMany(persona_locacion, { as: "persona_locacions", foreignKey: "fk_persona_id"});
  existencias.belongsTo(producto, { as: "fk_producto", foreignKey: "fk_producto_id"});
  producto.hasMany(existencias, { as: "existencia", foreignKey: "fk_producto_id"});
  producto.belongsTo(proveedor, { as: "fk_proveedor", foreignKey: "fk_proveedor_id"});
  proveedor.hasMany(producto, { as: "productos", foreignKey: "fk_proveedor_id"});
  grupo.belongsTo(subgrupo, { as: "fk_subgrupo", foreignKey: "fk_subgrupo_id"});
  subgrupo.hasMany(grupo, { as: "grupos", foreignKey: "fk_subgrupo_id"});
  medida.belongsTo(tipo_medida, { as: "fk_tipo_medida", foreignKey: "fk_tipo_medida_id"});
  tipo_medida.hasMany(medida, { as: "medidas", foreignKey: "fk_tipo_medida_id"});

  return {
    empleado_empresa,
    empresa,
    existencias,
    glosario,
    grupo,
    linea,
    linea_marca,
    locacion,
    local,
    marca,
    medida,
    persona,
    persona_locacion,
    producto,
    proveedor,
    subgrupo,
    tipo_medida,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
