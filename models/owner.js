const sequelize = require("../config/db");
const Shop = require("./shop")

const { DataTypes } = require("sequelize");

const Owner = sequelize.define(
  "owner",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_name: {
      type: DataTypes.STRING,
    },
    owner_phone_number: {
      type: DataTypes.STRING(16),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
Shop.belongsTo(Owner)
Owner.hasMany(Shop)

module.exports = Owner;
