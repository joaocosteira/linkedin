import './Login.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilePic] = useState("");
    const dispatch = useDispatch();


    const register = () => {

        if(!name){
            return alert("Please Enter a Full Name");
        }

        createUserWithEmailAndPassword(auth,email,password).then(
            (userAuth) => {
                updateProfile(userAuth.user,{
                    displayName : name,
                    photoURL : profilePic
                })
                .then(() => {
                    dispatch(login({
                        email : userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName : name,
                        photoUrl : profilePic
                    }))
                });
            }).catch( error => alert(error));
    }

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(
            userAuth => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : userAuth.user.displayName,
                    photoUrl : userAuth.user.photoURL,                    
                }))
            }
        ).catch( error => alert(error));

    }


    return(
        <div className="login">
            <img
                src="/linkedin_full.png"
                alt="linkedin full logo"
            />
            <form>
                <input 
                    value={name} 
                    onChange={({ target }) => { setName(target.value)}} 
                    placeholder='Full Name (required if registering)' 
                    type="text"
                />

                <input 
                    value={profilePic} 
                    onChange={({ target }) => { setProfilePic(target.value)}}                 
                    placeholder='Profile pic Url (optional)' 
                    type="text"
                />
                <input 
                    value={email} 
                    onChange={({ target }) => { setEmail(target.value)}} 
                    placeholder='Email' 
                    type="email"
                />

                <input 
                    value={password} 
                    onChange={({ target }) => { setPassword(target.value)}} 
                    placeholder='Password' 
                    type="password"
                />
                    
                <button type='submit' onClick={loginToApp} >Sign In</button>
            </form>

            <p>Not a Member? <span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login;