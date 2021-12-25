import React, {useEffect} from 'react';
import './App.css';
import Gmail from './components/Gmail';
import { useSelector, useDispatch } from "react-redux";
import {auth} from './firebase'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect (() => {
   auth.onAuthStateChanged((authUser) =>  {
    if(authUser) {
      dispatch(login({
         uid: authUser.uid,
         photo: authUser.photoURL  ? authUser.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXKGdKZxjWDJatds7-fvxpBzQe0fc8ON3Pw&usqp=CAU",
         displayName: authUser.displayName ? authUser.displayName:authUser.email,
         emailVerified: authUser.emailVerified
      }
      ));
    } else {
      dispatch(logout())
    }
    console.log(authUser);
    });
   }, [dispatch])


  return (
    <div className="App">
      {
        user ? <Gmail/> : <Login/>
      }
     
    </div>
  );
}

export default App;
