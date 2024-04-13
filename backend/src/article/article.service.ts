import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticle } from './libs/types/create-article.type';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async create(createArticle: CreateArticle) {
    const existArticle = await this.articleRepository.findOne({
      where: {
        name: createArticle.name,
        creatorId: createArticle.creatorId,
      },
    });
    if (existArticle) {
      throw new BadRequestException('Duplicated Data');
    }

    await this.articleRepository.save({
      name: createArticle.name,
      description: createArticle.description,
      startsAt: createArticle.startsAt,
      endsAt: createArticle.endsAt,
      participantMaxCount: createArticle.participantMaxCount,
      websiteURL: createArticle.websiteURL,
      target: createArticle.target,
    });

    return true;
  }
}
