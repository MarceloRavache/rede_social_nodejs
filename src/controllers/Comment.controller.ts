import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Comment } from "../entity/Comment";
import { Post } from "../entity/Post";

export const getComments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const manager = getConnection();

  const comments = manager.query(
    `SELECT * FROM comments WHERE id_post = '${req.params.id}'`
  );

  return res.status(200).json(comments);
};

export const createComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_post, comment } = req.body;

  const postExist = await getRepository(Post).findOne({ id: id_post });
  if (!postExist) return res.status(400).json({ message: "Post not exist." });

  const createComment = getRepository(Comment).create({
    id_post,
    id_user_comment: req["info"].id,
    comment,
  });

  const savedComment = await getRepository(Comment).save(createComment);

  return res.status(200).json(savedComment);
};
