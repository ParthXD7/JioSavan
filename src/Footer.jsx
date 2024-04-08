import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" style={{ marginTop: 'auto' }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          My Music Service © 2024
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
