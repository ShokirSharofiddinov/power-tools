const Order = require("../models/order");

const addOrder = async (ctx) => {
  try {
    const { client_id, shop_tool_id, order_date, period, total_price } =
      ctx.request.body;
    const newOrder = await Order.create({
      client_id,
      shop_tool_id,
      order_date,
      period,
      total_price,
    });
    ctx.status = 201;
    ctx.body = newOrder
  } catch (error) {
    ctx.status = 500
    ctx.body = "Serverda xatolik"
    console.log(error)
  }
};

const getOrder = async (ctx) => {
  try {
  } catch (error) {}
};

const getOrders = async (ctx) => {
  try {
  } catch (error) {}
};

module.exports = {
  addOrder,
  getOrder,
  getOrders,
};
