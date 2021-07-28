import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("likes")
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_post: number;

  @Column()
  id_user_liked: number;
}
