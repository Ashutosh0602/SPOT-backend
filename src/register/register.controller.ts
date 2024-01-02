import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createRegisterDto: CreateRegisterDto, @UploadedFile() file: Express.Multer.File) {
    return this.registerService.create(createRegisterDto,file);
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registerService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(+id);
  }
}
