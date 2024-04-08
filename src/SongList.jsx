import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField } from '@mui/material';
import AudioPlayer from './AudioPlayer';

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "/songs/01.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "/songs/02.mp3" },
  // Add more songs as needed
];

function SongList() {
  const [currentSong, setCurrentSong] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = searchTerm
    ? songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : songs;

  return (
    <>
      <TextField
        label="Search Songs"
        variant="outlined"
        fullWidth
        style={{ margin: '20px 0' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={2} style={{ padding: '20px' }}>
        {filteredSongs.map((song, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} onClick={() => setCurrentSong(song)}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {song.title}
                </Typography>
                <Typography color="textSecondary">
                  {song.artist}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {currentSong && <AudioPlayer src={currentSong.src} title={`${currentSong.title} - ${currentSong.artist}`} />}
    </>
  );
}

export default SongList;
