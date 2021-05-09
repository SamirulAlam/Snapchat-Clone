import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser);
  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
              username: authUser.displayName,
                profilePic:authUser.photoURL,
                id: authUser.uid
          }))
        }else{
          dispatch(logout())
        }
      })
  },[])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
          <img className="app__logo" src="https://pbs.twimg.com/profile_images/1324384358418042880/A-ENfuMC_400x400.jpg" />
          <div className="app__body">  
          <div className="body__background">
          <Switch>
          <Route path="/chats/view">
            <ChatView />
            </Route>
          <Route path="/chats">
            <Chats />
            </Route>
          <Route path="/preview">
            <Preview />
            </Route>
            <Route exact path="/">
            <WebcamCapture />
            </Route>
          </Switch>
            </div>    
          
        </div>
        </>
        )}
      
    </Router>
      
    </div>
  );
}

export default App;
