import { IsString, Length, MinLength, IsUUID } from '@nestjs/class-validator';
import { OmitType } from '@nestjs/swagger';

export class ArticleDTO {
  id?: string;
  @IsString()
  @Length(3, 15, { message: 'Title must be between 3 and 15 characters' })
  title: string;
  @IsString()
  @MinLength(100, {
    message: 'The content must have a minimum of 100 characters.',
  })
  content: string;
  @IsUUID()
  userId: string;
}

export class ArticleUpdateDTO extends OmitType(ArticleDTO, [
  'userId',
] as const) {}
