import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  const decodedValue = jwt.verify(token as string, JWT_SECRET) as JwtPayload; 

  if (decodedValue) {
    req.userId = decodedValue.id;
    next();
  } else {
    res.status(403).json({
      message: "You are not logged in!",
    });
  }
};
