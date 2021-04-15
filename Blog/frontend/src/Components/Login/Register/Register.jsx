import React, {useState } from 'react';
import  { Redirect }  from "react-router-dom";
import './Register.css';
import SignIn from './SignIn';


const Register = () =>{
    const [data, setData] = useState({
        email:"",
        username:"",
        name:"",
        password:"",
        cel:""
    });

    const onChange = ({target}) =>{
        setData((state) => {
            return { ...state, [target.id]: target.value}
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(SignIn(data)){
            window.alert("Usuario registrado con exito");
        }else{
            window.alert("Error al registrar");
        }
            
    }
    
        return (
            <div className="app">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <form onSubmit={onSubmit}>
                                <label>email</label><br></br>
                                <input type="text" id="email" onChange={onChange} value={data.email}></input><br></br>
                                <label>Nombre de usuario</label><br></br>
                                <input type="text" id="username" onChange={onChange} value={data.username}></input><br></br>
                                <label>Nombre</label><br></br>
                                <input type="text" id="name" onChange={onChange} value={data.name}></input><br></br>
                                <label>contraseña</label><br></br>
                                <input type="password" id="password" onChange={onChange} value={data.password}></input><br></br>
                                <label>Número de telefono</label><br></br>
                                <input type="text" id="cel" onChange={onChange} value={data.cel}></input><br></br>
                                <input type="submit" className="fadeIn fourth" value="Registrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Register;