export interface CreateArticle {
  name: string;
  description: string;
  lecturerId?: string;
  instituteId?: string;
  subjectId?: string;
  chairId?: string;
}
