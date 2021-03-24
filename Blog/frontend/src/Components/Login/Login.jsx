import React, { useState } from 'react';
import './Login.css';
import Auth from '../../services/Auth';
import  { Redirect, useHistory}  from "react-router-dom";
import isAuthenticated from "../../services/IsAuthenticated";



const Login = () => {
    let auth = isAuthenticated();
    let history = useHistory();
    
    const [data, setData] = useState({
        username:"",
        password:""
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.id]: target.value}
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        Auth(data);
        f1()
        auth = isAuthenticated();
        if(auth)
            history.push("/inicio");
            
    }

    function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
          setTimeout(() => {
              window.location.reload();
            resolve(x);
          }, 1000);
        });
      }

    async function f1() {
        var x = await resolveAfter2Seconds(15);
      }

    
    if(auth === false){
        return (
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="" id="icon" alt="User Icon" />
                        </div>

                    
                        <form onSubmit={onSubmit}>
                            <input type="text" className="fadeIn second" id="username" placeholder="user"
                             onChange={onChange} value={data.username}/>
                            <input type="password" className="fadeIn third" id="password" placeholder="password"
                             onChange={onChange} value={data.password}/>
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="http://localhost:3000/registrarse">Registrarse</a>
                            <br></br>
                            <a className="underlineHover" href="#">Olvido la contraseña?</a>
                        </div>

                    </div>
                </div>
        );
    }else {
        return (
            <Redirect to="/inicio"/>
        )
    }
}

export default Login;