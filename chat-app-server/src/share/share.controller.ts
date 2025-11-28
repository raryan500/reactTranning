import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateShareDto } from './dto/create-share.dto';
import { ShareService } from './share.service';

@ApiTags('Share')
@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post()
  @ApiOperation({ summary: 'Share a file with users' })
  @ApiBody({ type: CreateShareDto })
  create(@Body() dto: CreateShareDto) {
    return this.shareService.createShare(dto);
  }

  @Get('for/:userId')
  @ApiOperation({ summary: 'List files shared with a user' })
  listFor(@Param('userId') userId: string) {
    return this.shareService.listSharesForUser(userId);
  }

  @Get('by/:ownerId')
  @ApiOperation({ summary: 'List files shared by an owner' })
  listBy(@Param('ownerId') ownerId: string) {
    return this.shareService.listByOwner(ownerId);
  }
}