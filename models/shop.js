const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const ShopTool = require("./shop_tool");

const Shop = sequelize.define(
  "shop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_name: {
      type: DataTypes.STRING(20),
    },
    shop_owner_name: {
      type: DataTypes.STRING(15),
    },
    shop_phone_number: {
      type: DataTypes.STRING,
      unique: true
    },
    // district_id: {
    //   type: DataTypes.INTEGER
    // },
    adress:{
      type: DataTypes.STRING
    },
    location:{
      type: DataTypes.STRING
    },
    // owner_id: {
    //   type: DataTypes.BIGINT
    // }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

ShopTool.belongsTo(Shop);
Shop.hasMany(ShopTool);

module.exports = Shop; 