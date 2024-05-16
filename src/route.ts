import * as express from "express";
import * as CTL from "./controllers";
import * as MDW from "./middlewares";
import multer from "multer";
const upload = multer();

export class Routes {
  AuthMiddleware: MDW.AuthMiddleware;
  controller: CTL.Cal;

  constructor(private app: express.Express) {
    this.AuthMiddleware = new MDW.AuthMiddleware();
    this.controller = new CTL.Cal();
  }

  _Router = () => {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("Hello");
    });

    this.app.post(
      "/cal",
      this.AuthMiddleware.checkHeader,
      this.controller.multiplies,
    );
    this.app.post("/upload",uplo this.controller.uploadfile);
  };
}
