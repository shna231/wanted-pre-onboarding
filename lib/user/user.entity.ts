import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({ comment: '지원자 ID' })
  id!: number;

  @Column({ comment: '지원자 이름' })
  name!: string;
}
