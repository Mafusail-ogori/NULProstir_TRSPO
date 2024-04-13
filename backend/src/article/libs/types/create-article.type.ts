import { ArticleTarget } from '../enums/article-target.enum';

export interface CreateArticle {
  name: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  participantMaxCount: number;
  websiteURL: string;
  target: ArticleTarget;
  creatorId: string;
}
