import { IsString, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsOptional()
  @IsString()
  lecturerId?: string;
  @IsOptional()
  @IsString()
  subjectId?: string;
  @IsOptional()
  @IsString()
  chairId?: string;
  @IsOptional()
  @IsString()
  instituteId?: string;
}
