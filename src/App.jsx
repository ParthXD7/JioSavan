import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Navbar';
import SongList from './SongList';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer'; // Adjust the path based on your project structure

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a', // Dark color for the navbar and footer
    },
    secondary: {
      main: '#ff4081', // Accent color for buttons or icons
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <SongList />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
