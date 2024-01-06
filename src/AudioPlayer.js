// AudioPlayer.js
import React from 'react';

const AudioPlayer = ({ passcode, audioFiles }) => {
  const audioFile = audioFiles[passcode];

  return (
    <div>
      {audioFile ? (
        <audio controls>
          <source src={audioFile} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Invalid passcode. Please try again.</p>
      )}
    </div>
  );
};

export default AudioPlayer;
