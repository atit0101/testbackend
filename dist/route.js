"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
// import * as CTL from "./controllers";
const MDW = require("./middlewares");
class Routes {
    app;
    AuthMiddleware;
    constructor(app) {
        this.app = app;
        this.AuthMiddleware = new MDW.AuthMiddleware();
    }
    _Router = () => {
        this.app.post("/cal");
    };
}
exports.Routes = Routes;
//# sourceMappingURL=route.js.map