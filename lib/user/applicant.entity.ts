import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Applicant {
  constructor(partial: Partial<Applicant>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn({ comment: '지원내역 ID' })
  id!: number;

  @Column({ comment: '지원자 ID' })
  applicant_id!: number;

  @Column({ comment: '채용공고 ID' })
  post_id!: number;
}
