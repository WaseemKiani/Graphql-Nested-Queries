import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {

  constructor(private readonly prismaService: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    return await this.prismaService.post.create({
      data: {
        ...createPostInput
      
    }
  })
  }

  async findAll() {
    return await this.prismaService.post.findMany({})
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
