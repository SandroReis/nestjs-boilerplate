import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteUserDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
