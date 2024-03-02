import { useEffect, useState } from 'react';
import { habitsService } from '../services/habits.service';
import { UserHabit, TrackedHabit } from '../models/UserHabit';

interface HabitsState {
  userHabits?: UserHabit[];
  trackedHabits?: TrackedHabit[];
  isLoading: boolean;
}

export default function useHabitsState() {
  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  const [habitsState, setHabitsState] = useState<HabitsState>({
    isLoading: false,
  });

  //  ╔═╗╦═╗╦╔ ╗╔═╗╔╦╗╔═╗
  //  ╠═╝╠╦╝║║ ║╠═╣ ║ ║╣
  //  ╩  ╩╚═╩╚╝ ╩ ╩ ╩ ╚═╝

  function _startLoading() {
    setHabitsState((current) => ({ ...current, isLoading: true }));
  }

  function _stopLoading() {
    setHabitsState((current) => ({ ...current, isLoading: false }));
  }

  async function _fetchUserHabits(userId: number = 5, password: string) {
    try {
      _startLoading();
      const userHabits = await habitsService.fetchUserHabits(userId);
      if (userHabits) {
        setHabitsState((current) => ({ ...current, userHabits }));
      } else {
        console.error(`User habits couldn't be fetched`);
      }
    } catch (error) {
      console.error(`${error}`);
    }
    _stopLoading();
  }

  async function _fetchUserTrackedHabits(userId: number = 5, month: number = 3) {
    try {
      _startLoading();
      const trackedHabits = await habitsService.fetchUserTrackedHabits(userId, month);
      if (trackedHabits) {
        setHabitsState((current) => ({ ...current, trackedHabits }));
      } else {
        console.error(`User tracked habits couldn't be fetched`);
      }
    } catch (error) {
      console.error(`${error}`);
    }
    _stopLoading();
  }

  //  ╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  const _actions_ = {
    fetchUserHabits: _fetchUserHabits,
    fetchUserTrackedHabits: _fetchUserTrackedHabits
  };

  return [habitsState, _actions_] as [typeof habitsState, typeof _actions_];
}
