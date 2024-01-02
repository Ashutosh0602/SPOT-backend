import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/signup/entities/signup.entity';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports:[ConfigModule,MongooseModule.forFeature([{name:'UserModel',schema:UserSchema}])]
})
export class LoginModule {}
