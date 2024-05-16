import { Request, Response, NextFunction } from "express";
import { isUndefined } from "util";
export class AuthMiddleware {
  constructor() {}

  checkHeader(req: Request, res: Response, next: NextFunction) {
    try {
      let { authorization }: any = req.headers;
      if (authorization != "DEVCREW-BACKEND-TEST")
        return res.status(401).json({ status: 401, error: "Unauthorized" });
      next();
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  }
}
