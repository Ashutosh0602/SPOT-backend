import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { isEmail, isPhoneNumber } from 'class-validator';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Post()
  // create(@Body() createLoginDto: CreateLoginDto) {
  //   console.log(isPhoneNumber(createLoginDto.phoneNo), isEmail(createLoginDto.emailID))
  //   return this.loginService.create(createLoginDto);
  // }

  @Post()
  findAll(@Body() createLoginDto:CreateLoginDto) {
    return this.loginService.findAll(createLoginDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
