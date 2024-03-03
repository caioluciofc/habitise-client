import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/src/app.provider';
import { SquareChecked, SquareUnchecked, SquareEmpty } from '@/design_system';

interface Props {
    habitId: number;
    isFuture : boolean;
    day: number;
}

export function Cell({habitId, isFuture, day} : Props) {
  const { trackHabit, habitsState } = useAppContext();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (habitsState?.trackedHabits?.hasOwnProperty(day)) {
      setIsDone(habitsState.trackedHabits[day].includes(habitId));
    }
  }, [habitsState.trackedHabits]);

  function clickHabit() {
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), day); 
    trackHabit(5,habitId, date);
    setIsDone(!isDone);
  };

  return (
    <td key={habitId}>
      <div onClick={() => clickHabit()}>
        {isFuture ? <SquareEmpty /> : isDone ? <SquareChecked /> : <SquareUnchecked />}
      </div> 
    </td>
  );
}
