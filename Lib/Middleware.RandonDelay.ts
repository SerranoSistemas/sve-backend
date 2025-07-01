import { NextFunction, Request, Response } from "express";

/**
 * Middleware que aplica um delay aleatório entre 1.5s e 5s
 * se a query ?delay estiver presente na requisição.
 */
export const RandomDelayMiddleware = (REQ: Request, RES: Response, next: NextFunction) => {
  const min = 1500;
  const max = 5000;
  const delayInMs = Math.floor(Math.random() * (max - min + 1)) + min;

  setTimeout(() => {
    next();
  }, delayInMs);
};
