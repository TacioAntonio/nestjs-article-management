import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO, UserSignInDTO } from '../dtos/UserDTO';
import { UserService } from '../services/user.service';
import { AuthenticateService } from '../services/authenticate.service';

@Controller()
export class UserController {
  constructor(
    private readonly authenticateService: AuthenticateService,
    private readonly userService: UserService,
  ) {}

  @Post('create-user')
  createUser(@Body() userDto: UserDTO) {
    return this.userService.createUser(userDto);
  }

  @Post('sign-in')
  signIn(@Body() userDto: UserSignInDTO) {
    return this.authenticateService.signIn(userDto);
  }
}
