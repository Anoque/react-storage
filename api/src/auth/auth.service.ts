import { UsersService } from './../users/users.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(dto) {
    let user = await this.usersService.getUserByEmail(dto.email)

    if (user) {
      throw new HttpException(
        'User with such email already exists',
        HttpStatus.BAD_REQUEST,
      )
    }

    user = await this.usersService.createUser(dto)

    return user
  }

  async login(dto) {
    const user = await this.usersService.getUserByEmail(dto.email)

    if (!user) {
      throw new HttpException(
        'No user with such credintails',
        HttpStatus.BAD_REQUEST,
      )
    }

    return user
  }
}
