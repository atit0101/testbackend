import { Request, Response } from "express";
import * as formidable from "formidable";
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

      let data = a * b;
      // console.log(Number.parseFloat(data).toFixed(2));
      return res.status(200).json({
        code: 200,
        message: "success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  };

  uploadfile = async (req: Request, res: Response) => {
    try {
      var form = new formidable.IncomingForm();
      let filename, typename: string;
      let size: any;
      let sumtyxpe = ["Bytes", "KB", "MB", "GB"];

      await form.parse(req, function (err, fields, files) {
        let { fileupload } = files;
        if (fileupload == undefined) {
          return res.status(422).json({ error: "Please select a file" });
        }

        filename = fileupload[0].originalFilename;
        typename = fileupload[0].mimetype;
        size = parseFloat(fileupload[0].size);

        // console.log("start : ", size);

        let i = 0;
        while (size > 900) {
          size /= 1024;
          // console.log("loop : ", i, " ", size);
          i++;
        }

        return res.status(200).json({
          code: 200,
          message: "success",
          data: {
            fileName: filename,
            size: Math.round(size * 100) / 100 + " " + sumtyxpe[i],
            extension: typename,
          },
        });
      });

      // console.log(_files);
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  };
}
