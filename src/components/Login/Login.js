import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Header/Firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://cdn.dribbble.com/users/18903/screenshots/4417374/truenorth-logo_2x.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                    {e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className="login__signinbutton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Find My Roomate's 
                    conditions of use & sale. Please see
                    our privacy notices, our cookies notice
                    and our internet-based ads notice.
                </p>

                <Link to="./signup">
                    <h5> Click here to register</h5>
                </Link>
            </div>
        </div>
    )
}

export default Login
