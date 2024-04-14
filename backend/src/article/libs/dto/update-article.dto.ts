import { IsString } from 'class-validator';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends CreateArticleDto {
  @IsString()
  id: string;
}
