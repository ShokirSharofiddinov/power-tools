const sequelize = require("../config/db");

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
    otp_id: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Owner;
