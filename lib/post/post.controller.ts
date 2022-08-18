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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreatePostDTO,
  DetailPostDTO,
  SimplePostDTO,
  UpdatePostDTO,
} from './post.dto';
import { debug } from 'console';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('add')
  @ApiOperation({
    summary: '채용 공고 등록',
    description: '회사는 채용 공고를 등록할 수 있습니다.',
  })
  create(@Body() req: CreatePostDTO) {
    debug('controller check: post - add');
    return this.postService.create(req);
  }

  @Get('all')
  @ApiOperation({
    summary: '모든 채용 공고 목록',
    description: '등록된 모든 채용 공고 목록을 불러옵니다.',
  })
  async getAll(): Promise<SimplePostDTO[]> {
    debug('controller check: post - getAll');
    return await this.postService.getAll();
  }

  @Get()
  @ApiOperation({
    summary: '특정 채용 공고 목록',
    description: '특정 키워드로 채용 공고를 검색합니다.',
  })
  async search(@Query('search') search: string): Promise<SimplePostDTO[]> {
    return await this.postService.search(search);
  }

  @Get(':id')
  @ApiOperation({
    summary: '채용 공고 상세 페이지',
    description:
      '특정 채용 공고의 상세 내용 및 동일 회사의 다른 공고를 확인합니다.',
  })
  async getOne(@Param('id') id: number): Promise<DetailPostDTO> {
    debug('controller check: post - getAll id : ' + id);
    return await this.postService.getOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: '채용 공고 수정',
    description: '등록한 채용 공고를 수정합니다.',
  })
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDTO) {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '채용 공고 삭제',
    description: '등록한 채용 공고를 삭제합니다.',
  })
  async remove(@Param('id') id: number) {
    return await this.postService.remove(id);
  }
}
