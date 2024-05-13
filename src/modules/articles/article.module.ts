import { Module } from '@nestjs/common';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

const CONTROLLERS = [ArticleController];
const SERVICES = [ArticleService, JwtService];

@Module({
  imports: [TypeOrmModule.forFeature([Article, User])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class ArticleModule {}
