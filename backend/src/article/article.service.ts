import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticle } from './libs/types/create-article.type';
import { UpdateArticle } from './libs/types/update-article.type';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async create(createArticle: CreateArticle, userId: string) {
    const existArticle = await this.articleRepository.findOne({
      where: {
        name: createArticle.name,
        creatorId: userId,
      },
    });
    if (existArticle) {
      throw new BadRequestException('Duplicated Data');
    }
    return await this.articleRepository.save({
      name: createArticle.name,
      description: createArticle.description,
      lecturerId: createArticle.lecturerId,
      subjectId: createArticle.subjectId,
      chairId: createArticle.chairId,
      instituteId: createArticle.instituteId,
      creatorId: userId,
    });
  }

  async findArticlesByUserId(userId: string) {
    const foundArticles = await this.articleRepository.find({
      where: {
        creatorId: userId,
      },
    });
    if (!foundArticles) {
      throw new NotFoundException('Articles not found');
    }
    return foundArticles;
  }

  async deleteArticleByUserId(articleId: string, userId: string) {
    const existArticle = await this.articleRepository.findOne({
      where: {
        creatorId: userId,
        id: articleId,
      },
    });
    if (!existArticle) {
      throw new NotFoundException('Article to delete not found');
    }
    return await this.articleRepository.delete(articleId);
  }

  async updateArticleByUserId(updateArticle: UpdateArticle, userId: string) {
    const existArticle = await this.articleRepository.findOne({
      where: {
        id: updateArticle.id,
        creatorId: userId,
      },
    });
    if (existArticle) {
      return await this.articleRepository.update(
        existArticle.id,
        updateArticle,
      );
    }
    throw new NotFoundException('Article to update not found');
  }
}
