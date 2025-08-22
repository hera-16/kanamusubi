'use client';
// ↑ ブラウザで動くコンポーネントであることを宣言（ThemeProviderはコンテキストを扱う）
import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// お好みでカスタム（色やフォント）。まずはデフォルトに近いライトテーマ
const theme = createTheme({
  palette: { mode: 'light', primary: { main: '#1976d2' } },
});

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* ブラウザごとの差を吸収し、MUIのベーススタイルを適用 */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
