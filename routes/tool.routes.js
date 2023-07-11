const Router = require("@koa/router");
const { addTool, getTool, getTools } = require("../controllers/tool.controller");

const router = Router();

router.post("/add", addTool);
router.get("/:id", getTool);
router.get("/", getTools)

module.exports = () => router.routes();
