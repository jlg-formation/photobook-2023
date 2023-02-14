export interface Article {
  id: string;
  content: string;
  images: string[];
}

export type NewArticle = Omit<Article, 'id'>;
