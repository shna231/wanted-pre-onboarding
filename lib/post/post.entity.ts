import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity()
export class Post {
  constructor(partial: Partial<Post>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({ comment: '채용 공고 ID' })
  id!: number;

  @ManyToOne(() => Company, (company) => company.posts, { nullable: false })
  @JoinColumn({ name: 'shop_id' })
  shop_id!: Company;

  @Column({ comment: '채용 포지션' })
  pos!: string;

  @Column({ comment: '채용 보상금' })
  price!: number;

  @Column({ comment: '채용 내용' })
  content!: string;

  @Column({ comment: '채용 기술' })
  tech!: string;
}
