import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileDoc } from './schemas/file.schema';

@Injectable()
export class UploadService {
  constructor(@InjectModel(FileDoc.name) private fileModel: Model<FileDoc>) {}

  // async saveFile(file: Express.Multer.File) {
  //   const doc = new this.fileModel({
  //     filename: file.filename,
  //     originalName: file.originalname,
  //     mimeType: file.mimetype,
  //     size: file.size,
  //     path: file.path,
  //   });
  //   return doc.save();
  // }

  // async getById(id: string) {
  //   return this.fileModel.findById(id).lean();
  // }
}