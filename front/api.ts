import {Article, NewArticle} from './interfaces/Article';
import {User} from './interfaces/User';

const generateId = () => Date.now() + '_' + Math.random() * 1e15;
const sleep = (delay: number) =>
  new Promise<void>(resolve => setTimeout(resolve, delay));

class API {
  articles: Article[] = [];
  async connect(login: string, password: string): Promise<User> {
    console.log('login: ', login);
    console.log('password: ', password);
    await sleep(2000);
    return {displayName: 'Jean-Marc DURAND'};
  }

  async disconnect() {
    await sleep(2000);
  }

  async addArticle(newArticle: NewArticle) {
    const article: Article = {id: generateId(), ...newArticle};
    this.articles.push(article);
  }

  async getArticles() {
    return this.articles;
  }
}

export const api = new API();
