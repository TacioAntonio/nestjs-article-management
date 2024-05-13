import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { ArticleDTO, ArticleUpdateDTO } from '../dtos/articleDTO';
import { AuthenticateGuard } from 'src/guards/authenticate.guard';
import { AdminAuthorizationGuard } from 'src/guards/adminAuthorization.guard';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(AuthenticateGuard)
  @Get('articles')
  getArticles() {
    return this.articleService.getArticles();
  }

  @UseGuards(AuthenticateGuard)
  @Get('article')
  getArticle(@Query('id') id: string) {
    return this.articleService.getArticle(id);
  }

  @UseGuards(AdminAuthorizationGuard)
  @Post('article')
  insertProduct(@Body() articleDTO: ArticleDTO) {
    return this.articleService.createArticle(articleDTO);
  }

  @UseGuards(AdminAuthorizationGuard)
  @Put('article')
  updateArticle(
    @Query('id') articleId: string,
    @Body() articleDTO: ArticleUpdateDTO,
  ) {
    return this.articleService.updateArticle(articleId, articleDTO);
  }

  @UseGuards(AdminAuthorizationGuard)
  @Delete('article')
  deleteArticle(@Query('id') articleId: string) {
    return this.articleService.deleteArticle(articleId);
  }
}
