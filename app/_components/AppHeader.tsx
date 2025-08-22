'use client';
// MUIの多くのUIはクライアント側のインタラクションが前提（AppBarもクライアントでOK）
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">Mini-Reserve</Typography>
      </Toolbar>
    </AppBar>
  );
}
