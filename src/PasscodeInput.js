import React, { useState, useEffect } from 'react';
import './PasscodeInput.css';

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
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@300&display=swap');
      </style>
      <form onSubmit={handleSubmit}>
        <label>
          <input class="css-input" type="text" value={inputValue} onChange={handleChange} />
        </label>
        <br />
        <div class="button-container">
          <button type="submit">
            Play
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasscodeInput;
