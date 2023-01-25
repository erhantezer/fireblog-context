import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8hYHW3BXxdOP815YQki5FofO2RRBX5b0",
  authDomain: "fir-blog-2ca7a.firebaseapp.com",
  projectId: "fir-blog-2ca7a",
  storageBucket: "fir-blog-2ca7a.appspot.com",
  messagingSenderId: "1004796587658",
  appId: "1:1004796587658:web:c70a9f4c4f57a3cfc54773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//! register
export const createUser =  async (email, password, navigate, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    })

    alert("kayıt başarılı")
  } catch (error) {
    console.log(error);
  }
};


export const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      
    }
}