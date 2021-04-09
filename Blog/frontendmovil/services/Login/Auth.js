import axios from "axios";
import token from "./token.js";



const Auth = async (user, pass) => {
        try{
          const {data} = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/login/`,{
                username: user,
                password: pass
              })
            token(data);
        }
        catch(error) {
          console.log('AsyncStorage error: ' + error.message);
        }
}
export default Auth;