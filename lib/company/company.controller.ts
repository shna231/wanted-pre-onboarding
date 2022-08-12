import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetCompanyDTO } from './company.dto';
import { AddCompanyDTO } from './company.dto';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import { debug } from 'console';

@Controller('company')
@ApiTags('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('add')
  insertOne(@Body() req: AddCompanyDTO) {
    debug('debug print test');
    debug(req.name);
    return this.companyService.insertOne(req);
  }

  @Get('all')
  async getAll(): Promise<GetCompanyDTO> {
    return this.companyService.getAll();
  }
}
