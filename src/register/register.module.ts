import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleSchema } from './entities/register.entity';
import { UserSchema } from 'src/signup/entities/signup.entity';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports:[ConfigModule,MongooseModule.forFeature([{name:'VehicleModel',schema:VehicleSchema}]), MongooseModule.forFeature([{name:'UserModel',schema:UserSchema}])],
  exports:[MongooseModule]
})
export class RegisterModule {}
