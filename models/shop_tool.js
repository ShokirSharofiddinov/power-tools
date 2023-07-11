const sequelize = require("../config/db");
const Shop = require("./shop")
const Tool = require("./tool")
const { DataTypes } = require("sequelize");

const ShopTool = sequelize.define(
  "shop_tool",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // shop_id: {
    //   type: DataTypes.BIGINT,
    // },
    // tool_id: {
    //   type: DataTypes.BIGINT,
    // },
    rent_price: {
      type: DataTypes.DECIMAL,
    },
    tool_price: {
      type: DataTypes.DECIMAL,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Shop.belongsToMany(Tool, {through: "shop_tool"})
// Owner.hasMany.

module.exports = ShopTool;
