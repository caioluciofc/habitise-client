import React from 'react';
import { styles } from './header.style';
import { useAppContext } from '@/src/app.provider';

export function TableHeader() {

    const { habitsState } = useAppContext();

    return (
        <thead style={styles.thead}>
        <tr>
          <th>{String.fromCodePoint(0x1F4C5)}</th>
          {habitsState?.userHabits?.map((habit) => (
            <th key={habit.id}>{String.fromCodePoint(Number(`0x${habit.emoji_unicode_hex}`))}</th>
          ))}
        </tr>
      </thead>
    )
}