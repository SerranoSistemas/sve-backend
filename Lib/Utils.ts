import { NextFunction, Request, Response } from "express";

export const CheckDelay = (REQ: Request, RES: Response, NEXT: NextFunction) => {
  if (REQ.query.status) {
    //@ts-ignore
    RES.status(parseInt(REQ.query.status, 200));
  }

  if (REQ.query.delay) {
    //@ts-ignore
    const delayInMs = parseInt(REQ.query.delay, 10);
    if (!isNaN(delayInMs)) {
      setTimeout(() => {
        NEXT();
      }, delayInMs);
      return;
    }
  }
  NEXT();
};
