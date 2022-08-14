import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { debug } from 'console';
import { ApplyDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('apply')
  create(@Body() req: ApplyDTO) {
    debug('controller check: user apply - create');
    return this.userService.create(req);
  }
}
