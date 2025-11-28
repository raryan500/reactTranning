import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Message } from './schemas/message.schema';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async sendMessage(dto: SendMessageDto) {
    const msg = new this.messageModel({
      sender: new Types.ObjectId(dto.sender),
      receiver: new Types.ObjectId(dto.receiver),
      content: dto.content,
    });
    return msg.save();
  }

  // async listConversations(userId: string) {
  //   const uid = new Types.ObjectId(userId);

  //   const pipeline = [
  //     {
  //       $match: {
  //         $or: [{ sender: uid }, { receiver: uid }],
  //       },
  //     },
  //     {
  //       $project: {
  //         sender: 1,
  //         receiver: 1,
  //         content: 1,
  //         createdAt: 1,
  //         peer: {
  //           $cond: [{ $eq: ['$sender', uid] }, '$receiver', '$sender'],
  //         },
  //       },
  //     },
  //     {
  //       $sort: { createdAt: -1 },
  //     },
  //     {
  //       $group: {
  //         _id: '$peer',
  //         lastMessage: { $first: '$content' },
  //         lastAt: { $first: '$createdAt' },
  //       },
  //     },
  //     {
  //       $sort: { lastAt: -1 },
  //     },
  //   ];

  //   return this.messageModel.aggregate(pipeline);
  // }

  async historyBetween(userA: string, userB: string) {
    const a = new Types.ObjectId(userA);
    const b = new Types.ObjectId(userB);

    return this.messageModel
      .find({
        $or: [
          { sender: a, receiver: b },
          { sender: b, receiver: a },
        ],
      })
      .sort({ createdAt: 1 })
      .lean();
  }
}