import { Module } from '@nestjs/common';
import { NearestService } from './nearest.service';
import { NearestController } from './nearest.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleSchema } from 'src/register/entities/register.entity';
import { UserSchema } from 'src/signup/entities/signup.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions, createClient } from 'redis';
import { url } from 'inspector';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  controllers: [NearestController],
  providers: [NearestService, {
    provide: 'REDIS_OPTIONS',
    useValue: {
      url: 'rediss://default:3425050835194455b8a339d6113b2134@usw1-fresh-gnu-33499.upstash.io:33499'
    }
  },{
    inject: ['REDIS_OPTIONS'],
    provide: 'REDIS_CLIENT',
    useFactory: async (options: { url: string }) => {
      const client = createClient(options);
      console.log(client)
      await client.connect();
      return client;
    }
  }],
  exports: ['REDIS_CLIENT'],
  imports:[ConfigModule,MongooseModule.forFeature([{name:'VehicleModel',schema:VehicleSchema}]), MongooseModule.forFeature([{name:'UserModel',schema:UserSchema}])],
})
export class NearestModule {}
