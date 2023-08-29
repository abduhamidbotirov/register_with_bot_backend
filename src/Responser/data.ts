import { Response } from "express";

export default {
  send: (res: Response, data: any, code: number = 200) => {
    res.status(code).send(data);
  },
  msg: (res: Response, data: string, code: number = 200) => {
      res.status(code).send({
        message:data
    });
  },
};