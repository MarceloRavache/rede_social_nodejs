import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_post: number;

  @Column()
  id_user_comment: number;

  @Column()
  comment: string;
}
