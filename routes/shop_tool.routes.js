const Router = require("@koa/router");
const { addShopTool, getShopTool, getShopTools } = require("../controllers/shop_tool.controller");

const router = Router();

router.post("/add", addShopTool);
router.get("/:id", getShopTool);
router.get("/", getShopTools)

module.exports = () => router.routes();
