import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../configs/hash";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const userExist = await getRepository(User).findOne(email);

  if (!userExist) return res.status(404).json({ message: "User not found." });

  bcrypt.compare(password, userExist.password, (err, result) => {
    if (!result) return res.status(404).json({ message: "User not found." });
  });

  const token = jwt.sign({ id: userExist.id }, config.key, { expireIn: "1d" });

  return res.status(200).json({ token });
};
