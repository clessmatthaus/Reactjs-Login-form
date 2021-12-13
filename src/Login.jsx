import React from 'react'
import {Redirect} from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false);


const navigate = useNavigate();
const handleSubmit = (event) =>{
    event.preventDefault();

    if(username.lenght < 5) {
        setError(true);
    }else{
        axios.post("http://localhost:3002/users", {
            username: username,
            password: password,

        }).then(() =>{
            setError(false);

            setUsername("");
            setPassword("");
            alert('connexion etablie...')
            navigate("/Register");
        });
    }
};

    return (
        <div  className="login">
        <h1>Page de Connexion</h1>
            <div className="main-login">
               <form onSubmit = {(event) => handleSubmit(event)}>
                 <div>
                 <span className="fas fa-user"></span>
                 <input style={{border: error? "1px solid red" : "1px solid green"}} onChange={(event) => setUsername(event.target.value)} type="text" className="username" required placeholder="username" value={username}/>
                 {error && <p> unsername incorrect, username doit comporté au minimum 5 caractéres...</p>}
                </div>
                 <div>
                 <span className="fa fa-lock"></span>
                 <input onChange={(event) =>setPassword(event.target.value)} type="password" className="mdp" required placeholder="password" value={password}/>
                </div>
                <div className="motdepasse"><a href="#" className="motdepasse"> Mot de passe oublié ?</a>
                </div>
                <div> <button type="submit" className="btn-conect">Connexion</button>
                </div>
                </form>
                <div className="login-conect"> Se connecter avec</div>
                <div className="links-login">
                <div className="facebook-login"><i class="fab fa-facebook"></i>Facebook</div>
                 <div className="instagram-login"><i class="fab fa-instagram"></i>Instagram</div>
                </div>
                <div className="enregistrement">Vous n'avez pas encore de Compte?
                <a href="/Register" className="ap">Inscrivez-Vous</a></div>
            
            </div>
        </div>
    );
};

export default Login