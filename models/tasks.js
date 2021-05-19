const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    projectid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'projects',
        key: 'id'
      }
    },
    prueba: {
      type: DataTypes.JSONB,
      allowNull: true,
      //  get() {
      //    const rawValue = this.getDataValue('prueba');
      //    console.log("output:",JSON.stringify(rawValue));
      //    return JSON.stringify(rawValue);        
      //  },
    
      set(value) {
        this.setDataValue('prueba', JSON.parse(value));
        console.log("input",JSON.parse(value));
      }
    },
    jsonActual: {
      type: DataTypes.VIRTUAL,
        get() {
        const rawValue = this.getDataValue('prueba');
        console.log("output:",JSON.stringify(rawValue));
        return JSON.stringify(rawValue);        
      },
    }
  }, {
    sequelize,
    tableName: 'tasks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tasks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
