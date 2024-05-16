import * as process from "process";
import * as path from "path";

export class ServerConfig {
  port: number;
  constructor(conf: any) {
    this.port = parseInt(conf.port);
  }
}

export class Configuration {
  static server: ServerConfig;

  static init() {
    if (!process.env.APP_ENV) {
      require("dotenv").config({ path: path.join(process.cwd(), ".env") });
      process.env.TZ = "UTC";
    }
    let appEnv = process.env.APP_ENV;

    if (!appEnv) {
      throw Error("No environment specified");
    }
    if (
      appEnv != "production" &&
      appEnv != "staging" &&
      appEnv != "development"
    ) {
      throw Error("Invalid environment specified");
    }
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    console.log(`Environment: ${appEnv}`);

    this.server = {
      port: parseInt(process.env.APP_PORT),
    };
  }
}
