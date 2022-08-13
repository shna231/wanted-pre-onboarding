import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ comment: '지역', default: '제주도' })
  region!: string;
}
