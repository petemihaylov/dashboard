import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export const configureAppStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(),
  });

class StoreManager {
  private storeInstance: AppStore;

  constructor() {
    this.storeInstance = configureAppStore();
  }

  get store(): AppStore {
    return this.storeInstance;
  }

  resetStore(): void {
    this.storeInstance = configureAppStore();
  }
}

export const storeManager = new StoreManager();

export type AppStore = ReturnType<typeof configureAppStore>;
