import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcrypt";
import { config } from "../configs/hash";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  public constructor(email, password) {
    this.email = email;
    bcrypt.genSalt(config.salt, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        this.password = hash;
      });
    });
  }
}
