import { Module } from '@nestjs/common';
import { NearestService } from './nearest.service';
import { NearestController } from './nearest.controller';

@Module({
  controllers: [NearestController],
  providers: [NearestService],
})
export class NearestModule {}
