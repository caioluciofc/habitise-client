import axios from 'axios';

export const habitsService = {
    fetchUserHabits,
    fetchUserTrackedHabits
};

const apiUrl = 'https://habitise-api.fly.dev';

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
  