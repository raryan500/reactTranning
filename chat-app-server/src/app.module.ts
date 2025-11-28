import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { UploadModule } from './upload/upload.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/communication_app'),
    UsersModule,
    ChatModule,
    UploadModule,
    ShareModule
  ],
})
export class AppModule {}