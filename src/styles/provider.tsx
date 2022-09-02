import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as appTheme } from './theme';

interface AppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: FC<AppThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={appTheme}>
        {children}
  </ThemeProvider>;
};

export default AppThemeProvider;