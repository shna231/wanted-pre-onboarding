import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO, SimplePostDTO } from './post.dto';
import { debug } from 'console';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('add')
  create(@Body() req: CreatePostDTO) {
    debug('controller check: post - add');
    return this.postService.create(req);
  }

  @Get('all')
  async getAll() {
    debug('controller check: post - getAll');
    return await this.postService.getAll();
  }
}
