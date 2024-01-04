import { Inject, Injectable } from '@nestjs/common';
import { CreateNearestDto } from './dto/create-nearest.dto';
import { UpdateNearestDto } from './dto/update-nearest.dto';
import Redis from "ioredis"
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NearestService {
  constructor(private readonly configService:ConfigService,@Inject('REDIS_CLIENT') private client){}



  create(createNearestDto: CreateNearestDto) {
    return 'This action adds a new nearest';
  }

  async findAll() {
    const client = new Redis(`rediss://default:${this.configService.get('REDIS_PASS')}@usw1-fresh-gnu-33499.upstash.io:33499`);
    // const get=this.redis.geosearch('Ashutosh', 30.2343348, 30.243243, 50, "km", function(err, reply) {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    
    //   console.log(reply);
    // })
    const get= await client.geodist('Ashutosh','aiushi quiboai we', 'Vijay vihar')
    // const get=await client.geoadd('Dheeraj',21.23434, 35.233532, 'Vijay Vihar');
    return get;
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
