
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider,signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCe8hl_girBrwribigRXrXoeg0dycGYz5E",
  authDomain: "authentication-eb69e.firebaseapp.com",
  projectId: "authentication-eb69e",
  storageBucket: "authentication-eb69e.appspot.com",
  messagingSenderId: "665873559439",
  appId: "1:665873559439:web:8b892bbae2b840ed4aa5fa"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

const provider= new GoogleAuthProvider();

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
    })
}