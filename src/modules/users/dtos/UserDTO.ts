import {
  IsString,
  Length,
  Matches,
  IsEmail,
  MaxLength,
} from '@nestjs/class-validator';
import { OmitType } from '@nestjs/swagger';

export class UserDTO {
  id?: string;
  @IsString()
  @Length(3, 8, { message: 'Username must be between 3 and 8 characters' })
  @Matches(/^[a-zA-Z]+$/, {
    message: 'Username must contain only letters (uppercase or lowercase)',
  })
  username: string;
  @IsString()
  @IsEmail()
  @MaxLength(50, { message: 'The email must have a maximum of 50 characters.' })
  email: string;
  @IsString()
  @Length(6, 12, { message: 'Password must be between 6 and 12 characters' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&).',
    },
  )
  password: string;
  isAdmin?: boolean;
}

export class UserSignInDTO extends OmitType(UserDTO, ['username'] as const) {}
