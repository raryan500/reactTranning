import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(dto: CreateUserDto) {
    const exists = await this.userModel.findOne({ email: dto.email });
    if (exists) throw new BadRequestException('User already exists');

    const user = new this.userModel({
      fullName: dto.fullName,
      email: dto.email,
      password: dto.password,
    });

    const saved = await user.save();
    return {
      id: saved._id,
      fullName: saved.fullName,
      email: saved.email,
    };
  }

  async findById(id: string) {
    return this.userModel.findById(id).select('-password').lean();
  }


  async findAll() {
  return this.userModel.find();
}

async updateUser(id: string, dto: CreateUserDto) {
  return this.userModel.findByIdAndUpdate(id, dto, { new: true });
}

async deleteUser(id: string) {
  return this.userModel.findByIdAndDelete(id);
}

async signIn(email: string, password: string) {
  const user = await this.userModel.findOne({ email,password });
  if (!user) {
    throw new UnauthorizedException('Invalid email or password');
  }
   return {
    success: true,
    message: "Signin successful",
    data: user
  };
}
}