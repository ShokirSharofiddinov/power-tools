const Tool = require("../models/tool");

const addTool = async (ctx) => {
  try {
    const { tool_name, tool_brand, tool_describtion } = ctx.request.body;
    const newTool = await Tool.create({
      tool_name,
      tool_brand,
      tool_describtion,
    });
    ctx.status = 201;
    ctx.body = newTool;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda xatolik";
    console.log(error);
  }
};

const getTool = async (ctx) => {
  try {
  } catch (error) {}
};

const getTools = async (ctx) => {
  try {
  } catch (error) {}
};

module.exports = {
  addTool,
  getTool,
  getTools,
};
