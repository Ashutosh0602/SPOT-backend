import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { NearestModule } from './nearest/nearest.module';
import { PaymentModule } from './payment/payment.module';
import { LoginModule } from './login/login.module';
import { RentalController } from './rental/rental.controller';
import { RentalModule } from './rental/rental.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SignupModule,LoginModule,
    MongooseModule.forRoot('mongodb+srv://ashujn2del:NnZjqXzyqNIK5Blq@cluster0.e8wuars.mongodb.net/'),
    // MongooseModule.forFeature([{name:"User",schema:User}]), 
    RegisterModule, 
    ConfigModule.forRoot({isGlobal:true})
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
