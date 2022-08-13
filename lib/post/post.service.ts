import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../post/post.entity';
import { Company } from '../company/company.entity';
import { CreatePostDTO, SimplePostDTO, UpdatePostDTO } from '../post/post.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(req: CreatePostDTO) {
    const company = await this.companyRepository.findOneOrFail({
      where: { id: req.shop_id },
    });

    return await this.postRepository.insert({
      shop_id: company,
      pos: req.pos,
      price: req.price,
      content: req.content,
      tech: req.tech,
    });
  }

  async getAll() {
    const post_list: SimplePostDTO[] = [];
    await this.postRepository
      .find({
        relations: ['shop_id'],
      })
      .then((value) => {
        value.forEach((el) => {
          const p: SimplePostDTO = {
            id: el.id,
            shop_name: el.shop_id.name,
            contry: el.shop_id.contry,
            region: el.shop_id.region,
            pos: el.pos,
            price: el.price,
            tech: el.tech,
          };
          post_list.push(p);
        });
      });

    return post_list;
  }

  async update(id: number, updateData: UpdatePostDTO) {
    return await this.postRepository.update(id, updateData);
  }

  async remove(id: number) {
    return await this.postRepository.delete(id);
  }
}
