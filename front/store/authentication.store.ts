import {create} from 'zustand';
import {api} from '../api';
import {User} from '../interfaces/User';

export interface AuthenticationStore {
  user: User | undefined;
  connect: (login: string, password: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: undefined,
  connect: async (login, password) => {
    try {
      const user = await api.connect(login, password);
      set({user});
    } catch (err) {
      console.log('err: ', err);
      throw err;
    }
  },
  disconnect: async () => {
    await api.disconnect();
    set({user: undefined});
  },
}));

export const isConnectedSelector = (state: AuthenticationStore) => ({
  isConnected: state.user !== undefined,
});
