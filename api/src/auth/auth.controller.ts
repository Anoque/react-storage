import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersService } from 'src/users/users.service'
import { loginUserDto } from './dto/loginUser.dto'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async createUser(@Body() createUserDto) {
    const user = await this.authService.register(createUserDto)

    return user
  }

  @Post('/login')
  async login(@Body() loginUserDto: loginUserDto) {
    const user = await this.authService.login(loginUserDto)

    return user
  }
}
