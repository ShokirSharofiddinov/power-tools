const Order = require("../models/order");
const Shop = require("../models/shop");
const ShopTool = require("../models/shop_tool");

const addShopTool = async (ctx) => {
  try {
    const { shop_id, tool_id, rent_price, tool_price } = ctx.request.body;
    const newShopTool = await ShopTool.create({
      shop_id,
      tool_id,
      rent_price,
      tool_price,
    });
    ctx.status = 201;
    ctx.body = newShopTool;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
    console.log(error);
  }
};

const getShopTool = async (ctx) => {
  try {
  } catch (error) {}
};

const getShopTools = async (ctx) => {
  try {
    const ShopTool = await ShopTool.findAll({ include: Order });
    ctx.status = 200;
    ctx.body = ShopTool;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
  }
};

module.exports = {
  addShopTool,
  getShopTool,
  getShopTools,
};
