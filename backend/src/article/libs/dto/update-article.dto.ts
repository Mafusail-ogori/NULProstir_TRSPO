import { IsUUID } from 'class-validator';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends CreateArticleDto {
  @IsUUID()
  id: string;
}
