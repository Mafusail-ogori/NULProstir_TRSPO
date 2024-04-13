import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthUserGuard } from '../auth/guards/auth.guard';
import { CreateArticleDto } from './libs/dto/create-article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @UseGuards(AuthUserGuard)
  @Post('/create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }
}
