import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddCompanyDTO, Company } from './company.dto';
import { CompanyService } from './company.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { debug } from 'console';

@Controller('company')
@ApiTags('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('add')
  @ApiOperation({ summary: '회사 등록', description: '회사를 등록합니다.' })
  insertOne(@Body() req: AddCompanyDTO) {
    debug('controller check: company - add');
    return this.companyService.insertOne(req);
  }

  @Get('all')
  @ApiOperation({
    summary: '모든 회사 목록',
    description: '등록된 모든 회사 목록을 불러옵니다.',
  })
  async getAll(): Promise<Company[]> {
    debug('controller check: company - getAll');
    return this.companyService.getAll();
  }
}
