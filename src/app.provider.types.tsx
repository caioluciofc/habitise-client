import useHabitsState from './states/habits.state';

type HabitsActions = ReturnType<typeof useHabitsState>[1];

export interface AppProviderType extends HabitsActions {
  habitsState: ReturnType<typeof useHabitsState>[0];
}
