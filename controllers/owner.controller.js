const Owner = require("../models/owner");

const addOwner = async (ctx) => {
  try {
    const { owner_name, owner_phone_number } =
      ctx.request.body;
    const newOwner = await Owner.create({
      owner_name,
      owner_phone_number,
    });
    ctx.status = 201;
    ctx.body = newOwner
  } catch (error) {
    ctx.status = 500
    ctx.body = "Serverda xatolik"
    console.log(error)
  }
};

const getOwner = async (ctx) => {
  try {
  } catch (error) {}
};

const getOwners = async (ctx) => {
  try {
  } catch (error) {}
};

module.exports = {
  addOwner,
  getOwner,
  getOwners,
};
