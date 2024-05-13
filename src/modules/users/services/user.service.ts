import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/UserDTO';
import { ValidationsService } from './validations.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly validationsService: ValidationsService,
  ) {}

  async createUser(createUserDto: UserDTO) {
    const { username, email, password } = createUserDto;

    try {
      const isEmailUnique = await this.validationsService.isEmailUnique(email);

      if (!isEmailUnique) return { message: 'Email already exists.', isError: true };

      const user = new User();
      user.username = username;
      user.email = email;
      user.password = password;

      return this.userRepository.save(user);
    } catch (err) {
      throw new Error(err);
    }
  }
}
