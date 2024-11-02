import React, {useState } from 'react';
import '../styles/Login.css'
import { useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./Firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password) //API - 
            .then(auth => {
                history.push('/');
                alert('Signed in successfully');

            })
            
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password) //API - 
            .then((auth) => {
                if (auth) {
                    history.push('/');
                    alert('Account created successfully');
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className='login'> 
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h1>Welcome to Indian Restaurant.</h1>
                </div>
                <div className="login__subtext">
                    <h2> Plese login to continue!!</h2>
                </div>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Restaurant Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Restaurant Account</button>
            </div>
        </div>
    )
}

export default Login;