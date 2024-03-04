import React, { useState } from 'react';
import { useAppContext } from '@/src/app.provider';
import EmojiPicker, { Theme, EmojiStyle, EmojiClickData, Emoji } from 'emoji-picker-react';
import { styles } from './habitForm.style';
import { useRouter } from 'next/router';

export function HabitForm() {
  const [name, setName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiClickData | undefined>(undefined);
  const [showEmojis, setShowEmojis] = useState(false);
  const router = useRouter();

  const { addHabit } = useAppContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addHabit(name, selectedEmoji ? selectedEmoji.unified : '');
    // Reset form fields after submission if needed
    setName('');
    setSelectedEmoji(undefined);
    router.push('/');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <label style={styles.label}>
          Name:
          <input type="text" value={name} onChange={handleNameChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          Emoji:
          <input
            type="text"
            value={selectedEmoji ? selectedEmoji.emoji : ''}
            onFocus={() => setShowEmojis(true)}
            style={styles.input}
            readOnly={true}
          />
          {showEmojis && (
            <EmojiPicker
              onEmojiClick={(e) => setSelectedEmoji(e)}
              theme={Theme.DARK}
              emojiStyle={EmojiStyle.NATIVE}
            />
          )}
        </label>
        <button disabled={!name || !selectedEmoji} type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
