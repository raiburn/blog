import React from 'react';
import  { Redirect }  from "react-router-dom";
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
                <form onSubmit={onSubmit}>
                    <label>email</label><br></br>
                    <input onChange={onChange} value={data.email}></input><br></br>
                    <label>Nombre de usuario</label><br></br>
                    <input onChange={onChange} value={data.username}></input><br></br>
                    <label>Nombre</label><br></br>
                    <input onChange={onChange} value={data.name}></input><br></br>
                    <label>contraseña</label><br></br>
                    <input onChange={onChange} value={data.password}></input><br></br>
                    <label>confirmar contraseña</label><br></br>
                    <input ></input><br></br>
                    <label>Número de telefono</label><br></br>
                    <input onChange={onChange} value={data.cel}></input><br></br>
                </form>
            </div>
        )
}

export default Register;