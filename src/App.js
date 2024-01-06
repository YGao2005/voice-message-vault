// App.js
import React, { useState } from 'react';
import PasscodeInput from './PasscodeInput';
import AudioPlayer from './AudioPlayer';

const audioFiles = {
  passcode1: '/assets/testing.mp3',
  //passcode2: '/assets/audio2.mp3',
  // Add more passcode-audio mappings as needed
};

const App = () => {
  const [passcode, setPasscode] = useState('');

  const handlePasscodeSubmit = (newPasscode) => {
    setPasscode(newPasscode);
  };

  return (
    <div>
      <h1>Audio Website</h1>
      <PasscodeInput onSubmit={handlePasscodeSubmit} />
      <AudioPlayer passcode={passcode} audioFiles={audioFiles} />
    </div>
  );
};

export default App;
