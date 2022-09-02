export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export const theme = {
  colors: { 
    grey1: '#ddd',
    black: '#000',
    green: '#05ba02',
    red: '#fc0303'
  },
  padding: { },
  margin: { },
  boxShadow: { },
  fontSize: { }
};
