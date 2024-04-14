import { CreateArticle } from './create-article.type';

export interface UpdateArticle extends CreateArticle {
  id: string;
}
