import { useEffect, useState } from 'react';
import { habitsService } from '../services/habits.service';
import { UserHabit, TrackedHabit } from '../models/';

interface TrackedHabits {
  [day: number]: number[];
}

interface HabitsState {
  userHabits?: UserHabit[];
  trackedHabits?: TrackedHabits;
  isLoading: boolean;
}

export default function useHabitsState() {
  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  const [habitsState, setHabitsState] = useState<HabitsState>({
    isLoading: false,
    userHabits: [],
    trackedHabits: {},
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

  async function _fetchUserHabits(userId: number = 5) {
    try {
      _startLoading();
      const userHabits = await habitsService.fetchUserHabits(userId);
      if (userHabits) {
        setHabitsState((current) => ({ ...current, userHabits: userHabits['positive'] }));
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
        const result: TrackedHabits = {};
        trackedHabits.forEach((trackedHabit: TrackedHabit) => {
          const day = new Date(trackedHabit.done_at).getDate();
          if (!result[day]) {
            result[day] = [];
          }
          result[day].push(trackedHabit.habit);
        });
        setHabitsState((current) => ({ ...current, trackedHabits: result }));
      } else {
        console.error(`User tracked habits couldn't be fetched`);
      }
    } catch (error) {
      console.error(`${error}`);
    }
    _stopLoading();
  }

  async function _addHabit(habitName: string, emoji: string) {
    try {
      _startLoading();
      const newHabit = await habitsService.addHabit(habitName, emoji);
      _fetchUserHabits();
    } catch (error) {
      console.error(`${error}`);
    }
    _stopLoading();
  }

  async function _trackHabit(userId: number = 5, habitId: number, date: Date) {
    try {
      _startLoading();
      await habitsService.trackHabit(userId, habitId, date);
      var trackedHabits = habitsState.trackedHabits;

      if (!trackedHabits) {
        trackedHabits = {};
      }

      if (!trackedHabits.hasOwnProperty(date.getDay())) {
        trackedHabits[date.getDay()] = [];
      }

      trackedHabits[date.getDay()].push(habitId);

      setHabitsState((current) => ({ ...current, trackedHabits }));
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
    fetchUserTrackedHabits: _fetchUserTrackedHabits,
    addHabit: _addHabit,
    trackHabit: _trackHabit,
  };

  return [habitsState, _actions_] as [typeof habitsState, typeof _actions_];
}
