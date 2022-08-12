import { Injectable } from '@nestjs/common';
import { AddCompanyDTO } from './company.dto';
import { GetCompanyDTO } from './company.dto';
import { Repository } from 'typeorm';
import { Company } from '../company/company.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async insertOne(req: AddCompanyDTO) {
    return await this.companyRepository.insert({
      name: req.name,
      contry: req.contry,
      region: req.region,
    });
  }

  async getAll(): Promise<GetCompanyDTO> {
    const response = await this.companyRepository.find();

    return { company_list: response };
  }
}
