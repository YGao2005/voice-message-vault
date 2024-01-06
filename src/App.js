import React, { useState } from 'react';
import PasscodeInput from './PasscodeInput';
import './App.css'; // Import your CSS file for global styling
import BackgroundMusic from './BackgroundMusic';
import BackgroundNoise from './BackgroundNoise';

const audioMappings = {
  passcode1: '/assets/testing.mp3',
  //passcode2: '/assets/audio2.mp3',
  // Add more passcode-audio mappings as needed
};

const App = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handlePasscodeSubmit = (enteredPasscode) => {
    // Check if the entered passcode exists in the audioMappings
    if (audioMappings.hasOwnProperty(enteredPasscode)) {
      const audioPath = audioMappings[enteredPasscode];

      // Set the flag to indicate that audio is playing
      setIsAudioPlaying(true);

      // Create an audio element
      const audio = new Audio(audioPath);

      // Play the audio
      audio.play();

      // You can also add event listeners to handle audio events like 'ended', 'pause', etc.
      audio.addEventListener('ended', () => {
        console.log('Audio playback ended');
        // Add any additional logic you need when audio playback ends

        // Reset the flag when audio playback ends
        setIsAudioPlaying(false);
      });

      console.log(`Playing audio: ${audioPath}`);
    } else {
      // Handle incorrect passcode
      console.log('Incorrect passcode');
    }
  };

  return (
    <div class="background">
      <BackgroundMusic />
      <BackgroundNoise />
      <div>
        <video autoPlay loop muted playsInline class="back-video">
          <source src="assets/wavesbackground.mp4" type="video/mp4"></source>
        </video>
        <img src="/assets/overlay.jpg" alt="overlay" class="back-overlay"/>
      </div>
      <div className={`app-container ${isAudioPlaying ? 'fade-out' : 'fade-in'}`}>
        {(
          <PasscodeInput
            onSubmit={handlePasscodeSubmit}
            audioMappings={audioMappings}
          />
        )}
      </div>
    </div>
  );
};

export default App;
