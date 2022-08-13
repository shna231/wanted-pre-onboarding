import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../post/post.entity';
import { Company } from '../company/company.entity';
import {
  CreatePostDTO,
  DetailPostDTO,
  SimplePostDTO,
  UpdatePostDTO,
} from '../post/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { debug } from 'console';

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

  async getAll(): Promise<SimplePostDTO[]> {
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

  async search(search: string): Promise<SimplePostDTO[]> {
    const post_list: SimplePostDTO[] = [];

    // search : pos, tech
    await this.postRepository
      .find({
        relations: ['shop_id'],
        where: [{ pos: search }, { tech: search }],
      })
      .then((values) => {
        values.forEach((el) => {
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

  async getOne(post_id: number): Promise<DetailPostDTO> {
    debug('getOne call - post_id : ' + post_id);
    const response = await this.postRepository
      .findOneOrFail({
        relations: ['shop_id'],
        where: { id: post_id },
      })
      .then(async (value) => {
        debug('find post for detail : ' + value.id);
        const others2: Array<number> = await this.postRepository
          .find({
            relations: ['shop_id'],
            where: { shop_id: value.shop_id },
          })
          .then((post_list) => {
            const id_list: Array<number> = [];
            post_list.forEach((post) => id_list.push(post.id));
            return id_list;
          });

        const p: DetailPostDTO = {
          id: value.id,
          shop_name: value?.shop_id.name,
          contry: value?.shop_id.contry,
          region: value?.shop_id.region,
          pos: value?.pos,
          price: value?.price,
          tech: value?.tech,
          content: value?.content,
          others: others2,
        };
        return p;
      });

    return response;
  }

  async update(id: number, updateData: UpdatePostDTO) {
    return await this.postRepository.update(id, updateData);
  }

  async remove(id: number) {
    return await this.postRepository.delete(id);
  }
}
