import React, { useState } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAhjBMBOlPs2V_kdelF_dNpu31iKYDT_2g",
    authDomain: "memory-game-85f8d.firebaseapp.com",
    databaseURL: "https://memory-game-85f8d.firebaseio.com",
    projectId: "memory-game-85f8d",
    storageBucket: "memory-game-85f8d.appspot.com",
    messagingSenderId: "512476181352",
    appId: "1:512476181352:web:35d4485811a153ad3cdcdd",
    measurementId: "G-7168NYHXGC"
}; // put firebase config in here

firebase.initializeApp(firebaseConfig);

export default (props) => {
  const [user, setUser] = useState(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  useEffect(() => onAuthStateChange(), []);

  return (
    <div>
      {user && props.children}
      {!user && (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </div>
  );
};