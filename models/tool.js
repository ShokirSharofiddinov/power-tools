const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Tool = sequelize.define(
  "tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tool_name: {
      type: DataTypes.STRING(20),
    },
    tool_brand: {
      type: DataTypes.STRING(30),
    },
    tool_describtion: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Tool;
