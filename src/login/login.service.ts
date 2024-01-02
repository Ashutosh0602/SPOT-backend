import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDoc } from 'src/signup/entities/signup.entity';
const Cryptr = require('cryptr');

@Injectable()
export class LoginService {
  constructor(private readonly configService:ConfigService, @InjectModel('UserModel') private readonly userDB:Model<userDoc>){}

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  async findAll(createLoginDto: CreateLoginDto) {
    try {
      const cryptr = new Cryptr(process.env['CRPYTR'], { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
      const cryptNo= !createLoginDto.emailID ? await cryptr.encrypt(createLoginDto.phoneNo) : await cryptr.encrypt(createLoginDto.phoneNo);

      // if(createLoginDto.emailID){
      //   return this.userDB.findOne({emailId:cryptNo});
      // }else{
      //   console.log(cryptNo);
      //   return this.userDB.findOne({phoneNo:cryptNo})
      // }
      const find=this.userDB.findOne(createLoginDto);
      return find.select('-_id');
    } catch (error) {
      console.log(error)

    }
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
