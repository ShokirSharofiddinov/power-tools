const Router = require("@koa/router");

const {
  addClient,
  getClient,
  getClients
} = require("../controllers/client.controller");

const router = Router();

router.post("/add", addClient);
router.get("/:id", getClient);
router.get("/", getClients)

module.exports = () => router.routes();
