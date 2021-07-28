import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const posts = await getRepository(Post).find();
  return res.status(200).json(posts);
};
export const createPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { image, legend } = req.body;

  const { id } = req["info"];

  const createdPost = getRepository(Post).create({
    image,
    legend,
    id_user: id,
  });

  const savedPost = await getRepository(Post).save(createdPost);

  return res.status(200).json(savedPost);
};
