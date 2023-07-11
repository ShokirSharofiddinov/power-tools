const Router = require("@koa/router");

const {
  addOrder,
  getOrder,
  getOrders
} = require("../controllers/client.controller");

const router = Router();

router.post("/add", addOrder);
router.get("/:id", getOrder);
router.get("/", getOrders)

module.exports = () => router.routes();
