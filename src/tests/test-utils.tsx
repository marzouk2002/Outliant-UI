import { configureStore } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import app from '../redux/app/appSlice';
import { store } from '../redux/store';
import { theme } from '../styles/theme';

interface ProviderTestProps {
  children: ReactNode;
}

export const ProviderTest: FC<ProviderTestProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

interface ProviderCustomStoreProps {
  children: ReactNode;
  preloadedState: any;
}

export const ProviderCustomStore: FC<ProviderCustomStoreProps> = ({
  children,
  preloadedState,
}) => {
  const customStore = configureStore({
    reducer: {
      app,
    },
    preloadedState,
  });
  return (
    <Provider store={customStore}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
