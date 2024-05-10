import AsyncStorage from '@react-native-async-storage/async-storage';

export const prefix = '@BASE_APP';

const Storage = {
  setItem: async (key: string, value: any) => {
    try {
      const k = `${prefix}:${key}`;
      const v = {data: value};

      await AsyncStorage.setItem(k, JSON.stringify(v));

      return true;
    } catch (e) {
      // eslint-disable-line no-unused-vars
      return false;
    }
  },
  getItem: async (key: string, defaultValue = false) => {
    try {
      const value = await AsyncStorage.getItem(`${prefix}:${key}`);
      if (value === null) {
        return defaultValue;
      }

      return JSON.parse(value).data;
    } catch (error) {
      // eslint-disable-line no-unused-vars
      return defaultValue;
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(`${prefix}:${key}`);
    } catch (error) {
      return error;
    }
  },
  mergeItem: (key: string, value: any) =>
    AsyncStorage.mergeItem(`${prefix}:${key}`, JSON.stringify({data: value})),
  clear: async () => {
    const keys = await AsyncStorage.getAllKeys();
    const blackList: string | string[] = [];
    const appKeys = keys.filter(
      key => key.startsWith(`${prefix}:`) && !blackList.includes(key),
    );

    await AsyncStorage.multiRemove(appKeys);
  },
};

export default Storage;

// Usage Example
/*
import Storage from './path/to/storage';

const setItem = async () => {
    await Storage.setItem('key', 'value');
};

const getItem = async () => {
    const value = await Storage.getItem('key');
    console.log(value);
}

const removeItem = async () => {
    await Storage.removeItem('key');
}

const mergeItem = async () => {
    await Storage.merge
}
*/
