import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NearestService } from './nearest.service';
import { CreateNearestDto } from './dto/create-nearest.dto';
import { UpdateNearestDto } from './dto/update-nearest.dto';

@Controller('nearest')
export class NearestController {
  constructor(private readonly nearestService: NearestService) {}

  @Post()
  create(@Body() createNearestDto: CreateNearestDto) {
    return this.nearestService.create(createNearestDto);
  }

  @Get()
  findAll() {
    return this.nearestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nearestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNearestDto: UpdateNearestDto) {
    return this.nearestService.update(+id, updateNearestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nearestService.remove(+id);
  }
}
