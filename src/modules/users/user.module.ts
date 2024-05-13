import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthenticateService } from './services/authenticate.service';
import { ValidationsService } from './services/validations.service';
import { JwtService } from '@nestjs/jwt';

const CONTROLLERS = [UserController];
const SERVICES = [
  UserService,
  AuthenticateService,
  ValidationsService,
  JwtService,
];

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class UserModule {}
