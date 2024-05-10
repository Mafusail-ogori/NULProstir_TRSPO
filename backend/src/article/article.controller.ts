import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthUserGuard } from '../auth/guards/auth-user.guard';
import { AuthCreatorGuard } from '../auth/guards/auth-creator.guard';
import { CreateArticleDto } from './libs/dto/create-article.dto';
import { ArticleService } from './article.service';
import { DeleteArticleDto } from './libs/dto/delete-article.dto';
import { UpdateArticleDto } from './libs/dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @UseGuards(AuthCreatorGuard)
  @Post('/create')
  create(@Body() createArticleDto: CreateArticleDto, @Request() request: any) {
    return this.articleService.create(createArticleDto, request.userId);
  }

  @UseGuards(AuthUserGuard)
  @Get('/get-article-by-user-id')
  findArticleByUserId(@Request() request: any) {
    return this.articleService.findArticlesByUserId(request.userId);
  }

  @UseGuards(AuthCreatorGuard)
  @Delete('/delete-article-by-user-id')
  deleteArticleByUserId(
    @Body() deleteArticleDto: DeleteArticleDto,
    @Request() request: any,
  ) {
    return this.articleService.deleteArticleByUserId(
      deleteArticleDto.articleId,
      request.userId,
    );
  }

  @UseGuards(AuthCreatorGuard)
  @Put('/update-article-by-user-id')
  updateArticleByUserId(
    @Body() updateArticleDto: UpdateArticleDto,
    @Request() request: any,
  ) {
    return this.articleService.updateArticleByUserId(
      updateArticleDto,
      request.userId,
    );
  }
}
