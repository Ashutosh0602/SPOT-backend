import { Injectable } from '@nestjs/common';
import { CreateNearestDto } from './dto/create-nearest.dto';
import { UpdateNearestDto } from './dto/update-nearest.dto';
import Redis from "ioredis"

@Injectable()
export class NearestService {
  create(createNearestDto: CreateNearestDto) {
    return 'This action adds a new nearest';
  }

  findAll() {
    return `This action returns all nearest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nearest`;
  }

  update(id: number, updateNearestDto: UpdateNearestDto) {
    return `This action updates a #${id} nearest`;
  }

  remove(id: number) {
    return `This action removes a #${id} nearest`;
  }
}
