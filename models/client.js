const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_name: {
      type: DataTypes.STRING(20),
    },
    client_phone_number: {
      type: DataTypes.STRING(15),
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    freezeTableName: true,
    timestamps: false 
  }
);

module.exports = Client;
