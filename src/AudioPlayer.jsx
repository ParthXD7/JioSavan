import React, { useRef, useState } from 'react';
import { Box, IconButton, Slider, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function AudioPlayer({ src, title, songs }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(new Audio(src));
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
      audioRef.current.addEventListener('timeupdate', e => {
        setCurrentTime(e.target.currentTime);
      });
    } else {
      audioRef.current.pause();
    }
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleChange = (event, newValue) => {
    setCurrentTime(newValue);
    audioRef.current.currentTime = newValue;
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setCurrentTime(0);
      audioRef.current.src = songs[currentSongIndex + 1].src;
      audioRef.current.load();
      togglePlayPause();
    }
  };
  
  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setCurrentTime(0);
      audioRef.current.src = songs[currentSongIndex - 1].src;
      audioRef.current.load();
      togglePlayPause();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: 2 }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePrevious}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={togglePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={handleNext}>
          <SkipNextIcon />
        </IconButton>
      </Box>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={currentTime}
        min={0}
        step={1}
        max={duration}
        onChange={handleChange}
        sx={{ width: 200 }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => setVolume(Math.max(0, volume - 10))}>
          <VolumeDownIcon />
        </IconButton>
        <Slider
          aria-label="volume-indicator"
          size="small"
          value={volume}
          min={0}
          max={100}
          onChange={handleVolumeChange}
          sx={{ width: 80 }}
        />
        <IconButton onClick={() => setVolume(Math.min(100, volume + 10))}>
          <VolumeUpIcon />
        </IconButton>
      </Box>
      <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
}

export default AudioPlayer;