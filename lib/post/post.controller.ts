import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO, SimplePostDTO, UpdatePostDTO } from './post.dto';
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
  async getAll(): Promise<SimplePostDTO[]> {
    debug('controller check: post - getAll');
    return await this.postService.getAll();
  }

  @Get()
  async search(@Query('search') search: string): Promise<SimplePostDTO[]> {
    return await this.postService.search(search);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDTO) {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.postService.remove(id);
  }
}
