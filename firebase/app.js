import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3paPK159G5f52RCvm8MrmTHPwNk2swMg",
  authDomain: "arp-project-1a8f3.firebaseapp.com",
  projectId: "arp-project-1a8f3",
  storageBucket: "arp-project-1a8f3.appspot.com",
  messagingSenderId: "658814182515",
  appId: "1:658814182515:web:b9a69cef1f11a5f3a5b606",
  measurementId: "G-32DPC5PSKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const formEmail = document.querySelector('#email')
const formPassword = document.querySelector('#password')
const formButton = document.querySelector('#button') 

console.log(formEmail.value);

const loginUser = async () => {
  const valueEmail = formEmail.value;
  const valuePassword = formPassword.value;
  console.log("?");
  try{
    const user = await signInWithEmailAndPassword(auth, valueEmail, valuePassword);
    console.log(user);
  }catch(e){
    console.log(e);
  }
  
  
}

formButton.addEventListener('click',() => loginUser)
