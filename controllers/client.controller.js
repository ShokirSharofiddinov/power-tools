const Client = require("../models/client");
const Owner = require("../models/owner");

const addClient = async (ctx) => {
  try {
    const { client_name, client_phone_number, email } = ctx.request.body;
    const newClient = await Client.create({ client_name, client_phone_number, email });
    ctx.status = 201;
    ctx.body = newClient
  } catch (error) {
    ctx.status = 500
    ctx.body = "Serverda xatolik"
    console.log(error)
  }
};

const getClient = async (ctx) => {
  try {
  } catch (error) {}
};

const getClients = async (ctx) => {
  try {
    try {
      const client = await Client.findAll({ include: Owner });
      ctx.status = 200;
      ctx.body = client;
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = "Serverda xatolik";
    }
  } catch (error) {}
};

module.exports = {
  addClient,
  getClient,
  getClients,
};
