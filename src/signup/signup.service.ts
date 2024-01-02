import { Body, Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { userDoc } from './entities/signup.entity';
import {  InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
var jwt = require("jsonwebtoken");
import { v4 as uuidv4 } from 'uuid';

const signToken = (uid) => {
  return jwt.sign({ uid }, process.env.JWT_secret, {
    expiresIn: process.env.JWT_expires,
  });
};


@Injectable()
export class SignupService {
  constructor(private readonly configService:ConfigService, @InjectModel('UserModel') private readonly userDB:Model<userDoc>){}
  async create( createSignupDto: CreateSignupDto) {
    // console.log(process.env['JWT_secret']);

    try {
      // Adding unique ID to user
      let id=createSignupDto.name+'-'+uuidv4();
      const uid= id.split(' ').join('-');

      const newUser=await this.userDB.create({...createSignupDto,uid});
      console.log(newUser);
      return {status:'sign up successful'}
    } catch (error) {
      throw new Error(error);
    }
    return 'This action adds a new signup';
  }

  findAll() {
    return `This action returns all signup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: UpdateSignupDto) {
    return `This action updates a #${id} signup`;
  }

  remove(id: number) {
    return `This action removes a #${id} signup`;
  }
}
