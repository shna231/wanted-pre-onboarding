import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../post/post.entity';

@Entity()
export class Company {
  constructor(partial: Partial<Company>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({ comment: '회사 ID' })
  id!: number;

  @Column({ comment: '회사 이름' })
  name!: string;

  @Column({ comment: '국가', default: '한국' })
  contry!: string;

  @Column({ comment: '지역', default: 'hm_01' })
  region!: string;

  @OneToMany(() => Post, (post) => post.company)
  posts!: Post[];
}
