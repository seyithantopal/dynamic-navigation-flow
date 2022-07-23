import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static async storeData(key: string, value: string | object) {
    try {
      if (typeof value === 'object') {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } else {
        await AsyncStorage.setItem(key, value);
      }
    } catch (err) {
      console.log(
        'Something went wrong during storing data into Storage: ',
        err,
      );
    }
  }

  public static async getData(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log(
        'Something went wrong during getting data from Storage: ',
        err,
      );
    }
    return null;
  }

  static async removeData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(
        'Something went wrong during removing data from Storage: ',
        err,
      );
    }
  }
}

export default Storage;
