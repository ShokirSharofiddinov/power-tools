const Owner = require("../models/owner");
const Shop = require("../models/shop");

const addOwner = async (ctx) => {
  try {
    const { owner_name, owner_phone_number } = ctx.request.body;
    const newOwner = await Owner.create({
      owner_name,
      owner_phone_number,
    });
    ctx.status = 201;
    ctx.body = newOwner;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
    console.log(error);
  }
};

const getOwner = async (ctx) => {
  try {
  } catch (error) {}
};

const getOwners = async (ctx) => {
  try {
    const owner = await Owner.findAll({
      include: { model: Shop, required: true },
    });
    ctx.status = 200;
    ctx.body = owner[0];
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
  }
};

module.exports = {
  addOwner,
  getOwner,
  getOwners,
};
