import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Share } from './schemas/share.schema';
import { CreateShareDto } from './dto/create-share.dto';

@Injectable()
export class ShareService {
  constructor(@InjectModel(Share.name) private shareModel: Model<Share>) {}

  async createShare(dto: CreateShareDto) {
    const doc = new this.shareModel({
      owner: dto.owner,
      file: dto.fileId,
      sharedWith: dto.sharedWith,
      message: dto.message || '',
    });
    return doc.save();
  }

  async listSharesForUser(userId: string) {
    return this.shareModel
      .find({ sharedWith: userId })
      .populate('file')
      .populate('owner', '-password')
      .lean();
  }

  async listByOwner(ownerId: string) {
    return this.shareModel
      .find({ owner: ownerId })
      .populate('file')
      .populate('sharedWith')
      .lean();
  }
}