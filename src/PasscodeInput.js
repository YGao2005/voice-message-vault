// PasscodeInput.js
import React, { useState } from 'react';

const PasscodeInput = ({ onSubmit }) => {
  const [passcode, setPasscode] = useState('');

  const handleChange = (e) => {
    setPasscode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(passcode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Passcode:
        <input type="text" value={passcode} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasscodeInput;
