import {domainUrl} from './app.json';
import {Article, NewArticle} from './interfaces/Article';
import {User} from './interfaces/User';

const generateId = () => Date.now() + '_' + Math.random() * 1e15;

class API {
  articles: Article[] = [];
  async connect(login: string, password: string): Promise<User> {
    try {
      console.log('login: ', login);
      console.log('password: ', password);
      const response = await fetch(domainUrl + '/api/auth/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: login, password}),
      });
      if (response.status === 401) {
        throw new Error('Bad Login');
      }
      if (response.status >= 400) {
        throw new Error();
      }
      const user = await response.json();
      return user;
    } catch (err) {
      console.log('err: ', err);
      if (err instanceof Error) {
        if (err.message === 'Bad Login') {
          throw err;
        }
      }
      throw new Error('Technical Error');
    }
  }

  async disconnect() {
    try {
      await fetch(domainUrl + '/api/auth/disconnect', {method: 'POST'});
    } catch (err) {
      console.log('err: ', err);
    }
  }

  async addArticle(newArticle: NewArticle) {
    try {
      const response = await fetch(domainUrl + '/api/articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newArticle),
      });
      const article = await response.json();
      this.articles.push(article);
    } catch (err) {
      console.log('err: ', err);
      throw new Error('Technical Error');
    }
  }

  async getArticles() {
    return this.articles;
  }
}

export const api = new API();
