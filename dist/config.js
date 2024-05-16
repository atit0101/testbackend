"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = exports.ServerConfig = void 0;
const process = require("process");
const path = require("path");
class ServerConfig {
    port;
    constructor(conf) {
        this.port = parseInt(conf.port);
    }
}
exports.ServerConfig = ServerConfig;
class Configuration {
    static server;
    static init() {
        if (!process.env.APP_ENV) {
            require("dotenv").config({ path: path.join(process.cwd(), ".env") });
            process.env.TZ = "UTC";
        }
        let appEnv = process.env.APP_ENV;
        if (!appEnv) {
            throw Error("No environment specified");
        }
        if (appEnv != "production" &&
            appEnv != "staging" &&
            appEnv != "development") {
            throw Error("Invalid environment specified");
        }
        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        console.log(`Environment: ${appEnv}`);
        this.server = {
            port: parseInt(process.env.APP_PORT),
        };
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=config.js.map