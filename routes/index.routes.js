const Router = require("@koa/router");
const clientRoutes = require("./client.routes");
const orderRoutes = require("./order.routes");
const ownerRoutes = require("./owner.routes");
const shopRoutes = require("./shop.routes");
const toolRoutes = require("./tool.routes");
const shop_toolRoutes = require("./shop_tool.routes");
const router = Router();

router.use(["/api/client", "/api/user"], clientRoutes());
router.use("/api/order", orderRoutes())
router.use("/api/owner", ownerRoutes())
router.use("/api/shop", shopRoutes())
router.use("/api/tool", toolRoutes())
router.use("/api/shopTool", shop_toolRoutes())

module.exports = () => router.routes();
