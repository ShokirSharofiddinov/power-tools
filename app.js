const Koa = require("koa");
const config = require("config");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const sequelize = require("./config/db");
const router = require("./routes/index.routes");
const Client = require("./models/client");

const PORT = config.get("port");

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(serve("."));

app.use(router());

const start = async () => {
  try {
    await sequelize.authenticate();
    await Client.sync({ alter: true });
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
