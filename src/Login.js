import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import "./Login.css"

function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch(login({
                username: result.user.displayName,
                profilePic:result.user.photoURL,
                id: result.user.uid
            }))
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pbs.twimg.com/profile_images/1324384358418042880/A-ENfuMC_400x400.jpg" />
                <Button variant="outlined" onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login
