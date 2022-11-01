import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService){}

  create(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({
      data: createUserInput
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany({})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getPost(id: number) {
    return await this.prismaService.post.findFirst({
      where: {
        id: id
      }
    })
  }

}
