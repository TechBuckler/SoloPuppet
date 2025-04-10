import React, { useState } from 'react';

const CharacterForm: React.FC = () => {
  const [characterName, setCharacterName] = useState('');
  const [dialogTree, setDialogTree] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Character:', characterName);
    console.log('Dialog Tree:', dialogTree);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Character Name:</label>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Dialog Tree:</label>
        <textarea
          value={dialogTree}
          onChange={(e) => setDialogTree(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Character</button>
    </form>
  );
};

export default CharacterForm; 