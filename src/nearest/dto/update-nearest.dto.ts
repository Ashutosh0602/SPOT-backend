import { PartialType } from '@nestjs/mapped-types';
import { CreateNearestDto } from './create-nearest.dto';

export class UpdateNearestDto extends PartialType(CreateNearestDto) {}
