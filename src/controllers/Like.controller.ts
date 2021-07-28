import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Like } from "../entity/Like";
import { Post } from "../entity/Post";

export const getLikes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const manager = getConnection();

  const likes = manager.query(
    `SELECT * FROM likes WHERE id_post = '${req.params.id}'`
  );

  return res.status(200).json(likes);
};

export const likePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req["info"];

  const { id_post } = req.body;

  const postExist = await getRepository(Post).findOne({ id: id_post });
  if (!postExist) return res.status(400).json({ message: "Post not exist." });

  const likeExist = await getRepository(Like).findOne({
    id_post,
    id_user_liked: id,
  });

  if (likeExist)
    return res.status(400).json({ message: "Like already exist." });

  const createLike = getRepository(Like).create({ id_post, id_user_liked: id });

  const savedLike = await getRepository(Like).save(createLike);

  return res.status(200).json(savedLike);
};

export const removeLikePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req["info"];

  const { id_post } = req.body;

  const postExist = await getRepository(Post).findOne({ id: id_post });
  if (!postExist) return res.status(400).json({ message: "Post not exist." });

  const likeExist = await getRepository(Like).findOne({
    id_post,
    id_user_liked: id,
  });

  if (!likeExist) return res.status(400).json({ message: "Like not exist." });

  const createLike = getRepository(Like).create({ id_post, id_user_liked: id });

  const savedLike = await getRepository(Like).save(createLike);

  return res.status(200).json(savedLike);
};
