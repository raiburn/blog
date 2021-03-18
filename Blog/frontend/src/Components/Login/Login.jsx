import React, { useState } from 'react';
import './Login.css';
import Auth from '../../services/Auth';
import  { Redirect }  from "react-router-dom";
import isAutenticated from "../../services/IsAutenticated";

const Login = () => {
    let auth = isAutenticated();
    
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
        auth =Auth(data);
        console.log(auth);
        if(auth) 
            window.location.href = "http://localhost:3000/inicio";
        
        

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