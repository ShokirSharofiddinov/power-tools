const Router = require("@koa/router");
const { addOwner, getOwner, getOwners } = require("../controllers/owner.controller");

const router = Router();

router.post("/add", addOwner);
router.get("/:id", getOwner);
router.get("/", getOwners)

module.exports = () => router.routes();
