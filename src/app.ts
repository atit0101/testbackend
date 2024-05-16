import * as express from "express";
import * as bodyParser from "body-parser";
import { Configuration } from "./config";
require("dotenv").config();

import { Routes } from "./route";

var app: express.Express;
async function initServer() {
  app = express();
  Configuration.init();

  app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
  app.use(bodyParser.json({ limit: "50mb" }));
  new Routes(app)._Router();

  app.listen(Configuration.server.port, () => {
    console.log(`server is running on port : ${Configuration.server.port}`);
  });
}

initServer();
