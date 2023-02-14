import {User} from './interfaces/User';

class API {
  async connect(login: string, password: string): Promise<User> {
    console.log('login: ', login);
    console.log('password: ', password);
    return {displayName: 'Jean-Marc DURAND'};
  }

  async disconnect() {}
}

export const api = new API();
