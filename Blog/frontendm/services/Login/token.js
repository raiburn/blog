import AsyncStorage from '@react-native-community/async-storage'

const token = async (data) => {
    try {
        await AsyncStorage.setItem('token', data.token);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
    
}

export default token;