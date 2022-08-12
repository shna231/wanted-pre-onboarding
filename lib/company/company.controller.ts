import { Controller, Get } from '@nestjs/common';
import { GetCompanyDTO } from './company.dto';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('company')
@ApiTags('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAll(): Promise<GetCompanyDTO> {
    return this.companyService.getAll();
  }
}
