const Router = require("@koa/router");
const { addShop, getShop, getShops } = require("../controllers/shop.controller");

const router = Router();

router.post("/add", addShop);
router.get("/:id", getShop);
router.get("/", getShops)

module.exports = () => router.routes();
