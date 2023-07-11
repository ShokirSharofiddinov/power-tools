const Shop = require("../models/shop");

const addShop = async (ctx) => {
  try {
    const {
      shop_name,
      shop_owner_name,
      shop_phone_number,
      district_id,
      adress,
      location,
      ownerId
    } = ctx.request.body;
    const newShop = await Shop.create({
      shop_name,
      shop_owner_name,
      shop_phone_number,
      district_id,
      adress,
      location,
      ownerId
    });
    ctx.status = 201;
    ctx.body = newShop;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
    console.log(error);
  }
};

const getShop = async (ctx) => {
  try {
  } catch (error) {}
};

const getShops = async (ctx) => {
  try {
  } catch (error) {}
};

module.exports = {
  addShop,
  getShop,
  getShops,
};
