import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SendMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  sender: string;

  @ApiProperty()
  @IsNotEmpty()
  receiver: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;
}