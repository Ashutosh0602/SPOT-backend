import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { vehicleDoc } from './entities/register.entity';
import { userDoc } from 'src/signup/entities/signup.entity';

@Injectable()
export class RegisterService {
  constructor(private readonly configService:ConfigService, @InjectModel('VehicleModel') private readonly vehicleDB:Model<vehicleDoc>, @InjectModel('UserModel') private readonly userDB:Model<userDoc>){}

  async create(createRegisterDto: CreateRegisterDto,file) {
    // console.log(createRegisterDto, file);
    const user=await this.userDB.findOne({uid:createRegisterDto.UserID})
    createRegisterDto['uid']=new mongoose.Types.ObjectId(user['_id'])
    console.log(createRegisterDto);
    const vehicle=await this.vehicleDB.create(createRegisterDto);
    console.log(vehicle)
    return 'This action adds a new register';
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
