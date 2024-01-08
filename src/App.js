import React, { useState } from 'react';
import PasscodeInput from './PasscodeInput';
import './App.css'; // Import your CSS file for global styling
import BackgroundMusic from './BackgroundMusic';
import BackgroundNoise from './BackgroundNoise';

const audioMappings = {
  SMILE: '/assets/audios/SMILE.m4a',
  LOVE: '/assets/audios/Introduction.m4a',
  TEXTS: '/assets/audios/TEXTS.m4a',
  GIFTS: '/assets/audios/GIFTS.m4a',
  WRITE: '/assets/audios/WRITING.m4a',
  BLUSH: '/assets/audios/BLUSH.m4a',
  GOALS: '/assets/audios/GOALS.m4a',
  HEIGHT: '/assets/audios/HEIGHT.m4a',
  SMART: '/assets/audios/SMART.m4a',
  SCENT: '/assets/audios/SCENT.m4a',
  LAUGH: '/assets/audios/LAUGH.m4a',
  SKIN: '/assets/audios/SKIN.m4a',
  ENERGY: '/assets/audios/ENERGY.m4a',
  REASSURE: '/assets/audios/REASSURE.m4a',
  OUTFIT: '/assets/audios/OUTFIT.m4a',
  NATURE: '/assets/audios/NATURE.m4a',
  VOICE: '/assets/audios/VOICE.m4a',
  PICS: '/assets/audios/PICS.m4a',
  PASSION: '/assets/audios/PASSION.m4a',
  NAPS: '/assets/audios/NAPS.m4a',
  SUPPORT: '/assets/audios/SUPPORT.m4a',
  CONFIDENCE: '/assets/audios/CONFIDENCE.m4a',
  HANDS: '/assets/audios/HANDS.m4a',
  EMOJI: '/assets/audios/EMOJI.m4a',
  MUSIC: '/assets/audios/MUSIC.m4a',
  HAIR: '/assets/audios/HAIR.m4a',
  HUMOR: '/assets/audios/HUMOR.m4a',
  HONEST: '/assets/audios/HONEST.m4a',
  KIND: '/assets/audios/KIND.m4a',
  TRAVEL: '/assets/audios/TRAVEL.m4a',
  WISE: '/assets/audios/WISE.m4a',
  CHARM: '/assets/audios/CHARM.m4a',
  INSPIRE: '/assets/audios/INSPIRE.m4a',
  WORK: '/assets/audios/WORK.m4a',
  LISTEN: '/assets/audios/LISTEN.m4a',
  TALENT: '/assets/audios/TALENT.m4a',
  COMPLIMENT: '/assets/audios/COMPLIMENT.m4a',
  PATIENT: '/assets/audios/PATIENT.m4a',
  WARM: '/assets/audios/WARM.m4a',
  EMPATH: '/assets/audios/EMPATH.m4a',
  OPTIMISM: '/assets/audios/OPTIMISM.m4a',
  GRATEFUL: '/assets/audios/GRATEFUL.m4a',
  LEAD: '/assets/audios/LEAD.m4a',
  SPEAK: '/assets/audios/SPEAK.m4a',
  CALM: '/assets/audios/CALM.m4a',
  FAITH: '/assets/audios/FAITH.m4a',
  MORNING: '/assets/audios/MORNING.m4a',
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
