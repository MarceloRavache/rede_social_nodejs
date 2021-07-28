import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../configs/hash";

export const userRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const { Authorization } = req.headers;

  const token = Authorization.toString().split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.key);
    req["info"] = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
