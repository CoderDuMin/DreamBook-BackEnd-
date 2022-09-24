
// src/entity/user.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255
  })
  nickname: string;

  @Column()
  account: string;

  @Column({select:false})
  password: string;

  @Column()
  status: number;

  @Column()
  gender: number;
}