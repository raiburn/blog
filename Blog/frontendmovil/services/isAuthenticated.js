import AsyncStorage from '@react-native-community/async-storage';

let isAuthenticated = async () => {
    try{
        const token = await AsyncStorage.getItem('token');
        if(token != null)
          return true;
        else
          return false;
      } catch {
        return false;
      }
}

export default isAuthenticated;