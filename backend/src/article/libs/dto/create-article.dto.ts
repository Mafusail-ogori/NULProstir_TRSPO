import { IsEnum, IsNumber, IsString } from 'class-validator';
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
  participantMaxCount: number;
  @IsString()
  websiteURL: string;
  @IsEnum(ArticleTarget)
  target: ArticleTarget;
  @IsString()
  creatorId: string;
}
