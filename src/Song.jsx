import React, { useState, useRef } from 'react';
import { Card, CardContent, Typography, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Song = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card sx={{ margin: 2, display: 'flex', alignItems: 'center' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{song.title}</Typography>
        <Typography variant="subtitle1">{song.artist}</Typography>
      </CardContent>
      <IconButton onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src={song.src} type="audio/mp3" />
      </audio>
    </Card>
  );
};

export default Song;