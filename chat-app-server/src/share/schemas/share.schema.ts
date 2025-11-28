import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Share extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  owner: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'FileDoc' })
  file: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], default: [] })
  sharedWith: Types.ObjectId[]; // user ids

  @Prop()
  message: string;
}

export const ShareSchema = SchemaFactory.createForClass(Share);