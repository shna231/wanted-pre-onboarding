import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Applicant } from '../user/applicant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Applicant)
    private readonly applicantRepository: Repository<Applicant>,
  ) {}

  async create(req: ApplyDTO) {
    const success_res = '지원되었습니다.';
    const fail_res = '이미 지원한 공고입니다.';

    const applied = await this.applicantRepository.findOne({
      where: { applicant_id: req.id, post_id: req.post_id },
    });

    if (applied == null) {
      await this.applicantRepository.insert({
        applicant_id: req.id,
        post_id: req.post_id,
      });

      return success_res;
    } else {
      return fail_res;
    }
  }
}
