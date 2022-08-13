import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddCompanyDTO, Company } from './company.dto';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import { debug } from 'console';

@Controller('company')
@ApiTags('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('add')
  insertOne(@Body() req: AddCompanyDTO) {
    debug('controller check: company - add');
    return this.companyService.insertOne(req);
  }

  @Get('all')
  async getAll(): Promise<Company[]> {
    debug('controller check: company - getAll');
    return this.companyService.getAll();
  }
}
