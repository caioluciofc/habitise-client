import React from 'react';
import { styles } from './header.style';
import { useAppContext } from '@/src/app.provider';
import { Tooltip } from 'react-tooltip'

export function TableHeader() {
  const { habitsState } = useAppContext();

  return (
    <thead style={styles.thead}>
      <Tooltip id="dateIcon" />
      {habitsState?.userHabits?.map((habit) => <Tooltip key={habit.id} id={habit.id.toString()} />)}
      <tr>
        <th data-tooltip-id="dateIcon" data-tooltip-content="Day">{String.fromCodePoint(0x1f4c5)}</th>
        {habitsState?.userHabits?.map((habit) => (
          <th key={habit.id} data-tooltip-id={habit.id.toString()} data-tooltip-content={habit.name}>{String.fromCodePoint(Number(`0x${habit.emoji_unicode_hex}`))}</th>
        ))}
      </tr>
    </thead>
  );
}
