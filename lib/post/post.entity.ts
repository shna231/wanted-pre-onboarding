import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../company/company.entity';

@Entity()
export class Post {
  constructor(partial: Partial<Post>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({ comment: '채용 공고 ID' })
  id?: number;

  @Column({ comment: '회사 ID', default: 'hm_01' })
  shop_id!: string;

  @Column({ comment: '채용 등록 일자' })
  start_date: Date;

  @Column({ comment: '채용 마감 일자' })
  end_date: Date;

  @Column({ comment: '채용 포지션' })
  post!: number;

  @Column({ comment: '채용 보상금' })
  price!: Date;

  @Column({ comment: '채용 내용' })
  content!: Date;

  @Column({ comment: '채용 기술' })
  tech!: Date;

  @ManyToOne(() => Company, (company) => company.posts)
  company!: Company;
}
