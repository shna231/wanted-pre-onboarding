import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { debug } from 'console';
import { ApplyDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('apply')
  @ApiOperation({
    summary: '지원',
    description: '사용자는 특정 채용 공고에 지원할 수 있습니다.',
  })
  create(@Body() req: ApplyDTO) {
    debug('controller check: user apply - create');
    return this.userService.apply(req);
  }
}
