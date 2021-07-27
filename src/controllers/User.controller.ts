import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = getRepository(User).find();

  return res.status(200).json(users);
};
