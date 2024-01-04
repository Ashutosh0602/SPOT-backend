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
import { createClient } from '@redis/client';

@Module({
  imports: [SignupModule,LoginModule,NearestModule,
    MongooseModule.forRoot('mongodb+srv://ashujn2del:NnZjqXzyqNIK5Blq@cluster0.e8wuars.mongodb.net/'),
    // MongooseModule.forFeature([{name:"User",schema:User}]), 
    RegisterModule, 
    ConfigModule.forRoot({isGlobal:true})
  ], 
  controllers: [AppController],
  providers: [AppService,    {
    provide: 'REDIS_OPTIONS',
    useValue: {
      url: `rediss://default:${process.env['REDIS_PASS']}@usw1-fresh-gnu-33499.upstash.io:33499`
    }
  },{
    inject: ['REDIS_OPTIONS'],
    provide: 'REDIS_CLIENT',
    useFactory: async (options: { url: string }) => {
      const client = createClient(options);
      await client.connect();
      return client;
    }
  }],
  exports: ['REDIS_CLIENT'],
})
export class AppModule {}
