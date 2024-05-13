import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';
import { ArticleDTO, ArticleUpdateDTO } from '../dtos/articleDTO';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getArticles() {
    try {
      const articles = await this.articleRepository.find();
      return articles;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getArticle(id: string | any) {
    if (!id) return { message: 'Unable to perform search.' };

    try {
      id = id.replaceAll('"', '');
      const article = await this.articleRepository.findOne({
        where: { id },
      });

      if (!article) return { message: 'Article not found.' };

      return article;
    } catch (err) {
      throw new Error(err);
    }
  }

  async createArticle(articleDTO: ArticleDTO) {
    const { title, content, userId } = articleDTO;

    try {
      const castUserId: any = userId;

      const user = await this.userRepository.findOne({
        where: {
          id: castUserId,
        },
      });

      if (!user) return { message: 'User not found.', isError: true };

      const createdArticle = this.articleRepository.create({
        title,
        content,
        userId: castUserId,
      });

      return this.articleRepository.save(createdArticle);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateArticle(articleId: string | any, articleDTO: ArticleUpdateDTO) {
    const { title, content } = articleDTO;

    try {
      articleId = articleId.replaceAll('"', '');

      const article = await this.articleRepository.findOne({
        where: {
          id: articleId,
        },
      });

      if (!article) return { message: 'Article not found.', isError: true };

      article.title = title;
      article.content = content;

      return this.articleRepository.save(article);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteArticle(articleId: string | any) {
    try {
      articleId = articleId.replaceAll('"', '');

      const article = await this.articleRepository.findOne({
        where: {
          id: articleId,
        },
      });

      if (!article) return { message: 'Article not found.' };

      await this.articleRepository.delete(articleId);

      return { message: 'Article deleted successfully' };
    } catch (err) {
      throw new Error(err);
    }
  }
}
