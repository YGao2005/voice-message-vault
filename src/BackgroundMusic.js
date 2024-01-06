import React, { useEffect, useState } from 'react';

const BackgroundMusic = () => {
  const [isUserClicked, setIsUserClicked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsUserClicked(true);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (isUserClicked) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const backgroundMusic = new Audio('/assets/coldmusic.mp3');
      const audioSource = audioContext.createMediaElementSource(backgroundMusic);
      const gainNode = audioContext.createGain();

      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Set initial volume to 0
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);

      // Fade in
      gainNode.gain.linearRampToValueAtTime(0.03, audioContext.currentTime + 5); // Adjust the duration as needed

      backgroundMusic.addEventListener('ended', () => {
        // Fade out when the audio ends
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 5); // Adjust the duration as needed

        // Loop the audio
        backgroundMusic.currentTime = 0; // Reset the currentTime for seamless looping
        backgroundMusic.play();
      });

      // Loop the audio
      backgroundMusic.loop = true;

      // Start playing
      backgroundMusic.play();
    }
  }, [isUserClicked]);

  return <></>;
};

export default BackgroundMusic;
