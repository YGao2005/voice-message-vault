import React, { useState, useEffect } from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';

const Input = styled(BaseInput)(
  // Your existing styling here
);

const PasscodeInput = ({ onSubmit, audioMappings, passcode }) => {
  const [inputValue, setInputValue] = useState('');
  const [audio, setAudio] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!audio || audio.paused) {
      const newAudio = new Audio(audioMappings[passcode]);
      newAudio.addEventListener('ended', handleAudioEnded);
      setAudio(newAudio);
    }

    await onSubmit(inputValue);
    setInputValue(''); // Clear the input value after successful submission
  };

  const handleAudioEnded = () => {
    setAudio(null);
  };

  useEffect(() => {
    if (audio && audio.paused) {
      audio.play().catch(error => {
        console.error('Error playing audio:', error.message);
        setAudio(null);
      });
    }
  }, [audio]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Passcode:
          <Input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasscodeInput;
