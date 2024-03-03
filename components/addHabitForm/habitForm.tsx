import React, { useState } from 'react';
import { useAppContext } from '@/src/app.provider';
import EmojiPicker, { Theme, EmojiStyle, EmojiClickData, Emoji } from 'emoji-picker-react';
import { CustomStyle } from '@/src/models';

export function HabitForm() {
  const [name, setName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiClickData | undefined>(undefined);
  const [showEmojis, setShowEmojis] = useState(false);

  const { addHabit } = useAppContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addHabit(name, selectedEmoji ? selectedEmoji.unified : '');
    // Reset form fields after submission if needed
    setName('');
    setSelectedEmoji(undefined);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <label style={styles.label}>
        Name:
        <input type="text" value={name} onChange={handleNameChange} style={styles.input}/>
      </label>
      <label style={styles.label}>
        Emoji:
        <input type="text" value={selectedEmoji ? selectedEmoji.emoji : ""} onFocus={() => setShowEmojis(true)} style={styles.input} readOnly={true}/>
        {showEmojis && <EmojiPicker onEmojiClick={(e) => setSelectedEmoji(e)} theme={Theme.DARK} emojiStyle={EmojiStyle.NATIVE}/>}
      </label>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
    </div>
  );
};

const styles : CustomStyle = {
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };
