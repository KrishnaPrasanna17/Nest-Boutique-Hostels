import React, { useState } from 'react';
import './Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { auth,db } from '../Header/Firebase';


function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [personality, setPersonality] = useState('');
    const [interest, setInterest] = useState('');
    const [work, setWork] = useState('');


    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            auth.user.updateProfile({
                displayName: firstname
            })
            console.log(auth.user.uid);//succesfully created a new user
            if (auth) {
                history.push('/')
            }
            return db.collection('Users').doc(auth.user.uid).set({
                Name: firstname + " " + lastname,
                Gender: gender,
                Personality: personality,
                Interest: interest,
                Work: work
            })
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='signup'>
            <Link to="/">
                <img
                    className="signup__logo"
                    src="https://cdn.dribbble.com/users/18903/screenshots/4417374/truenorth-logo_2x.png"
                    alt=""
                />
            </Link>
            <div className="signup__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>First Name</h5>
                    <input type='text' value={firstname} onChange=
                    {e => setFirstname(e.target.value)} />

                    <h5>Last Name</h5>
                    <input type='text' value={lastname} onChange=
                    {e => setLastname(e.target.value)} />

                    <h5>E-Mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <div className="dropdown_boxes">
                        <label htmlFor="gender">Gender</label>    
                        <select name="gender" value={gender} onChange=
                        {e => setGender(e.target.value)}>    
                            <option value="select">--Select--</option>    
                            <option value="Male">Male</option>    
                            <option value="Female">Female</option>    
                            <option value="Others">Other</option>    
                        </select> 

                        <label htmlFor="work">Work</label>    
                        <select name="work" value={work} onChange=
                        {e => setWork(e.target.value)}>    
                            <option value="select">--Select--</option>    
                            <option value="Professional">Professional</option>    
                            <option value="Student">Student</option>        
                        </select> 

                        <label htmlFor="personality">Personality</label>    
                        <select name="personality" value={personality} onChange=
                        {e => setPersonality(e.target.value)}>    
                            <option value="select">--Select--</option>    
                            <option value="Architect">Architect</option>    
                            <option value="Logician">Logician</option>    
                            <option value="Commander">Commander</option>  
                            <option value="Debater">Debater</option>
                            <option value="Advocate">Advocate</option>
                            <option value="Mediator">Mediator</option>
                            <option value="Protagonist">Protagonist</option>
                            <option value="Campainer">Campainer</option>
                            <option value="Logistician">Logistician</option>
                            <option value="Defender">Defender</option>
                            <option value="Executive">Executive</option>
                            <option value="Consul">Consul</option>
                            <option value="Virtuoso">Virtuoso</option>
                            <option value="Adventurer">Adventurer</option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Entertainer">Entertainer</option> 
                            <option value="Prefer not to say">Prefer not to say</option> 
                        </select> 
                         <div className="hyper_link">
                            <span>Don't know your presonality? </span>
                            <a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer nofollow">Click here</a>
                        </div>
                        
                    </div>

                    <h5>Interest</h5>
                    <input type='text' value={interest} onChange=
                    {e => setInterest(e.target.value)} />

                    <button onClick={register} className="signup__registerbutton">Sign Up</button>
                </form>
            </div>
        </div>
    ) 
}

export default Signup
