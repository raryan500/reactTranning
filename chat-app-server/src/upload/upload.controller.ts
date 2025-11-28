import { Controller, Post, UploadedFile, UseInterceptors, Get, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UploadService } from './upload.service';

import * as path from 'path';
import * as fs from 'fs';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // @Post('file')
  // @ApiOperation({ summary: 'Upload a file (local storage)' })
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: (req, file, cb) => {
  //         const uploadPath = path.join(process.cwd(), 'uploads');
  //         if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
  //         cb(null, uploadPath);
  //       },
  //       filename: (req, file, cb) => {
  //         const ext = path.extname(file.originalname);
  //         const fname = `${uuidv4()}${ext}`;
  //         cb(null, fname);
  //       },
  //     }),
  //     limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  //   }),
  // )
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   const saved = await this.uploadService.saveFile(file);
  //   return {
  //     id: saved._id,
  //     filename: saved.filename,
  //     originalName: saved.originalName,
  //     mimeType: saved.mimeType,
  //     size: saved.size,
  //     url: `/uploads/${saved.filename}`,
  //   };
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get file metadata by id' })
  // async getFile(@Param('id') id: string) {
  //   return this.uploadService.getById(id);
  // }
}