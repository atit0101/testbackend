"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const config_1 = require("./config");
require("dotenv").config();
const route_1 = require("./route");
var app;
async function initServer() {
    app = express();
    config_1.Configuration.init();
    app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb" }));
    new route_1.Routes(app)._Router();
    app.listen(config_1.Configuration.server.port, () => {
        console.log(`server is running on port : ${config_1.Configuration.server.port}`);
    });
}
initServer;
//# sourceMappingURL=app.js.map