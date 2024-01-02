import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/signup.entity';

@Module({
  controllers: [SignupController],
  providers: [SignupService],
  imports:[ConfigModule,MongooseModule.forFeature([{name:'UserModel',schema:UserSchema}])],
  exports:[MongooseModule]
})
export class SignupModule {}
