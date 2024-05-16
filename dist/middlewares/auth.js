"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
class AuthMiddleware {
    constructor() { }
    checkHeader(req, res, next) {
        try {
            let { Authorization } = req.headers;
            if (Authorization != "DEVCREW-BACKEND-TEST")
                return res.status(401).json({ status: 401, error: "Unauthorized" });
        }
        catch (error) {
            return res.status(500).json({ status: 0, message: error.message });
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.js.map