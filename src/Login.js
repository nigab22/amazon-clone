import React, {useState} from 'react';
import './Login.css';
import { auth } from './Firebase';
import { Link, useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); //stop refresh
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=> {
              //redirect to homepage 
              //console.log(auth.user.email);
              history.push('/');
            })
            .catch((e) => alert(e.message)); 
    };

    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //create a user account and redirect to logged in
                history.push('/')
            })
            .catch((e) => alert(e.message));
    };


    return (
        <div className="login">
            <Link to="/">
                <img className="login-logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="" />
            </Link>

            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} type="submit" className="login-sign-in-button">
                        Sign In
                    </button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} type="submit" className="login-register-button">
                    Create your Amazon accout
                </button>
            </div>
        </div>
    )
}

export default Login
