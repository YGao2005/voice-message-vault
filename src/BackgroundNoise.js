import React, { useEffect, useState } from 'react';

function BackgroundNoise() {
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
      const backgroundNoise = new Audio('/assets/backgroundnoise.mp3');
      const audioSource = audioContext.createMediaElementSource(backgroundNoise);
      const gainNode = audioContext.createGain();

      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Set initial volume to 0
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);

      // Fade in
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 5); // Adjust the duration as needed

      backgroundNoise.addEventListener('ended', () => {
        // Fade out when the audio ends
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 5); // Adjust the duration as needed

        // Loop the audio
        backgroundNoise.currentTime = 0; // Reset the currentTime for seamless looping
        backgroundNoise.play();
      });

      // Loop the audio
      backgroundNoise.loop = true;

      // Start playing
      backgroundNoise.play();
    }
  }, [isUserClicked]);

  return <></>;
}

export default BackgroundNoise;
