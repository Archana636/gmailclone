// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD63QdCUkGKT1C2UovaHHG-stcnxPAiQKc",
    authDomain: "clone-5d61a.firebaseapp.com",
    projectId: "clone-5d61a",
    storageBucket: "clone-5d61a.appspot.com",
    messagingSenderId: "1083553103262",
    appId: "1:1083553103262:web:77aac8a3bf3ff82aa7ea8f",
    measurementId: "G-LX5BYF9204"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebaseApp.firestore()


  export {auth, provider};
  export default db;

