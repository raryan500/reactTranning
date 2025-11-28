import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //registration
  @Post('signup')
  @ApiOperation({ summary: 'Signup user' })
  @ApiBody({ type: CreateUserDto })
  async userSignUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //signin
  @Post('signin')
  @ApiOperation({ summary: 'Signin user' })
  async userSignIn(
    @Body() body: { email: string; password: string }
  ) {
    return this.usersService.signIn(body.email, body.password);
  }

  //Get by Id
  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  async getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  // Get All user
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers() {
    return this.usersService.findAll();
  }

  // UPDATE
  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: CreateUserDto })
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  // DELETE
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}