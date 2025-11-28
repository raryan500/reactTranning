import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class FileDoc extends Document {
  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  originalName: string;

  @Prop()
  mimeType: string;

  @Prop()
  size: number;

  @Prop()
  path: string;
}

export const FileSchema = SchemaFactory.createForClass(FileDoc);
export const FileModelName = 'FileDoc';