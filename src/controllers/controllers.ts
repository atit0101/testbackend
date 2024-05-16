import { Request, Response } from "express";

export class Cal {
  constructor() {}

  multiplies = (req: Request, res: Response) => {
    try {
      let { a, b } = req.body;
      if (!a || !b) {
        return res.status(422).json({ error: "Unsupported data format" });
      }
      a = parseFloat(a);
      b = parseFloat(b);
      if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Data Is Not Number" });
      }
      return res
        .status(200)
        .json({ code: 200, message: "success", data: a * b });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  };

  uploadfile = (req: Request, res: Response) => {
    try {
      console.log(req);
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  };
}
