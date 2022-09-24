
// src/entity/user.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dream {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255
  })
  title: string;

  @Column()
  content: string;

  @Column()
  type: number;

  @Column()
  status: number;

  @Column()
  userId: number;

  @Column()
  isPublic: number;

  @Column()
  wakeTime: Date;

  @Column()
  createTime: Date;

  @Column()
  editTime: Date;
}