import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{

    onAuthStateChanged(auth, (userAuth) => {

      if(userAuth){

        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL || userAuth.photoUrl  || ''        
        }));

      }else{
        dispatch(logout());
      }

    });

  },[dispatch]);


  return(
    <div className="app">
      <Header/>
      {
        !user ? <Login/> :(
          <div  className='app__body'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        )
      }
    </div>
  )

}

export default App;
