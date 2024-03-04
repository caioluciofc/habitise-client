import axios from 'axios';

export const habitsService = {
  fetchUserHabits,
  fetchUserTrackedHabits,
  addHabit,
  trackHabit
};

const apiUrl = 'https://habitise-api.fly.dev';
// const apiUrl = 'http://localhost:8000';

async function fetchUserHabits(userId: number = 5) {
  try {
    const response = await axios.get(`${apiUrl}/user-habits/${userId}/`);
    return response.data;
  } catch (error) {
    console.error(`Failed fetching user habits: ${error}`);
    return null;
  }
}

async function fetchUserTrackedHabits(userId: number = 5, month: number = 3) {
  try {
    const response = await axios.get(`${apiUrl}/track-habit/?user_id=${userId}&month=${month}`);
    return response.data;
  } catch (error) {
    console.error(`Failed fetching user tracked habits: ${error}`);
    return null;
  }
}

async function addHabit(habitName: string, emojiUnicodeHex: string) {
  try {
    const response = await axios.post(`${apiUrl}/habits/`, {
      name: habitName,
      emoji_unicode_hex: emojiUnicodeHex,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed adding habit: ${error}`);
    return null;
  }
}

async function trackHabit(userId: number = 5, habitId: number, date: Date) {
  try {
    const response = await axios.post(`${apiUrl}/track-habit/`, {
      user_id: userId,
      habit_id: habitId,
      done_at: date.getTime() / 1000,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed tracking habit: ${error}`);
    return null;
  }
}
