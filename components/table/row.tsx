import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/src/app.provider';
import { SquareChecked, SquareUnchecked } from '@/design_system';
import { Cell } from './cell';

interface Props {
  day: number;
}

export function Row({day} : Props) {
  const { habitsState } = useAppContext();
  const [isToday, setIsToday] = useState(false);
  const today = new Date().getDate();
  
  useEffect(() => {
    setIsToday(day === today);
  }, [day]);

  return (
    <tr key={day} className={isToday ? 'highlight' : ''}>
      <td>{day}</td>
      {habitsState.userHabits?.map((habit) => (
            <Cell key={habit.id} habitId={habit.id} isFuture={today < day} day={day}/>
      ))}
    </tr>
  );
}
