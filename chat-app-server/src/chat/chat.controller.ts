import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send message' })
  @ApiBody({ type: SendMessageDto })
  send(@Body() dto: SendMessageDto) {
    return this.chatService.sendMessage(dto);
  }

  // @Get('list/:userId')
  // @ApiOperation({ summary: 'List conversations (latest message per peer) for a user' })
  // list(@Param('userId') userId: string) {
  //   return this.chatService.listConversations(userId);
  // }

  @Get('history/:userA/:userB')
  @ApiOperation({ summary: 'Chat history between two users' })
  history(@Param('userA') userA: string, @Param('userB') userB: string) {
    return this.chatService.historyBetween(userA, userB);
  }
}