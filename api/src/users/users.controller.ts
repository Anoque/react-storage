import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('all')
  async getAllUsers() {
    const users = await this.usersService.getAllUsers()

    return users
  }
}
