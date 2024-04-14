import { IsEnum, IsNumber, IsString, IsUrl, Min, Max } from 'class-validator';
import { ArticleTarget } from '../enums/article-target.enum';

export class CreateArticleDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  startsAt: Date;
  @IsString()
  endsAt: Date;
  @IsNumber()
  @Min(0)
  @Max(500)
  participantMaxCount: number;
  @IsUrl()
  websiteURL: string;
  @IsEnum(ArticleTarget)
  target: ArticleTarget;
}
