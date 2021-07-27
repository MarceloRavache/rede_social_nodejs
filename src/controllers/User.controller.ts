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

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  if (password === "")
    return res.status(400).json({ message: "password empty." });

  const user = await getRepository(User).findOne({ email });

  if (user) return res.status(400).json({ message: "email already exist." });

  const createUser = getRepository(User).create({ email, password });

  const savedUser = await getRepository(User).save(createUser);

  savedUser.password = "Password is private.";

  return res.status(200).json(savedUser);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  const user = await getRepository(User).findOne({ email });

  if (user) return res.status(400).json({ message: "email already exist." });

  const updateUser = await getRepository(User).findOne(req.params.id);

  updateUser.email = email;

  const savedUser = await getRepository(User).save(updateUser);

  return res.status(200).json(savedUser);
};
