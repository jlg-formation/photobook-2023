import {create} from 'zustand';
import {api} from '../api';
import {Article, NewArticle} from '../interfaces/Article';

export interface ArticleStore {
  articles: Article[];
  add: (newArticle: NewArticle) => Promise<void>;
  retrieveAll: () => Promise<void>;
}

export const useArticleStore = create<ArticleStore>(set => ({
  articles: [],
  add: async newArticle => {
    await api.addArticle(newArticle);
  },
  retrieveAll: async () => {
    const articles = await api.getArticles();
    set({articles});
  },
}));
