import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateShareDto {
  @ApiProperty()
  @IsNotEmpty()
  owner: string;

  @ApiProperty()
  @IsNotEmpty()
  fileId: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  sharedWith: string[];

  @ApiProperty({ required: false })
  message?: string;
}