import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveGameData = async (data, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw new Error('Data saving to AsyncStorage error');
  }
};

export const getGameData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    // console.log('asyncStorageUtils-',data)
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error(`Game data fetching of ${key} error`);
  }
};

export const saveProfile = async userData => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(userData));
  } catch (error) {
    console.error('pfofile save failed:', error);
  }
};

export const fetchProfile = async () => {
  try {
    const user = await AsyncStorage.getItem('profile');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('profile get failed:', error);
  }
};
export const updateUser = async (key, value) => {
  try {
    const user = await fetchProfile();
    if (user) {
      user[key] = value;
      await AsyncStorage.setItem('profile', JSON.stringify(user));
    }
  } catch (error) {
    console.error(`profile update failed ${key}:`, error);
  }
};
