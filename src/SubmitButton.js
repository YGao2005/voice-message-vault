import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@mui/base/Button';
import { styled } from '@mui/system';

const SubmitButtonRoot = styled('div')`
  // Add any additional styling for the audio player container if needed
`;

const SubmitButton = ({ isPasscodeCorrect, audioMappings, passcode }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsButtonPressed(false); // Reset the button press state when audio ends
    };

    // Check if audioRef.current is not null before adding the event listener
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnd);

      // Remove the event listener when the component unmounts
      return () => {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [audioRef]);

  const handleButtonClick = () => {
    setIsButtonPressed(true);

    // If the button is pressed and the passcode is correct, start playing the audio
    if (isPasscodeCorrect && audioRef.current) {
      audioRef.current.play();
    }
  };

  const audioSrc = isPasscodeCorrect ? audioMappings[passcode] : null;

  return (
    <SubmitButtonRoot>
      <Button type="button" onClick={handleButtonClick}>
        Play
      </Button>
      {isButtonPressed && isPasscodeCorrect && audioSrc && (
        <audio controls autoPlay ref={audioRef}>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </SubmitButtonRoot>
  );
};

export default SubmitButton;
