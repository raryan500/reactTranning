import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { FileDoc, FileSchema } from './schemas/file.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FileDoc.name, schema: FileSchema }])],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {}