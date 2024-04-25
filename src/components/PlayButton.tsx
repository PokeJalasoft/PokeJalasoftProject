import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface PlayButtonProps {
    audioUrl: string;
}

const PokemonPlayButton: React.FC<PlayButtonProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const audio = new Audio(audioUrl);
    audio.play();
    setIsPlaying(true);
    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        disabled={isPlaying}
        aria-label="play"
      >
        <PlayArrowIcon style={{ color: 'black', backgroundColor: 'transparent' }} />
      </IconButton>
    </div>
  );
};

export default PokemonPlayButton;
