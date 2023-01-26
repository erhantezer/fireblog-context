import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, GoogleAuthProvider,
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 

} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

//! ************************ AUTH *****************************
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
const auth = getAuth(app);
const db = getDatabase(app); //! for blogs


//! register
export const createUser = async (email, password, navigate, displayName) => {

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");

    //! Bir kullanıcının profilini güncelleme Bir kullanıcının temel profil bilgilerini
    //!  (kullanıcının görünen adı ve profil fotoğrafı URL'si) updateProfile yöntemiyle güncelleyebilirsiniz. güncel verileri firebase kayıt için
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    })

    alert("kayıt başarılı")
  } catch (error) {
    console.log(error);
  }
};


//! login
export const login = async (email, password, navigate) => {

  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
  } catch (error) {
    console.log(error)
  }
};


//! kullanıcının signin olup olmadığına bakıp yeni kullanıcı bilgilerini dönen yapı
export const userObserver = (setCurrentUser) => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL })
    } else {
      setCurrentUser(false)
      alert("user yok")
    }
  })
};


//! Logout çıkış yapılıp veriler boşaltılır bakınız yukarıdaki else girer ve setleyip currentuser false kurarız
export const logOut = () => {

  signOut(auth);
  alert("logout başarılı")
};



//! google ile giriş için
export const signInWithGoogle = (navigate) => {

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/")
      alert("google ile giriş yapıldı")
    }).catch((error) => console.log(error))
};



//! pasaport unutulunca 
export const forgotPassword = (email) => {

  sendPasswordResetEmail(auth,email)
  .then(() => {
    alert("eposta kutunuzu kontrol edin")
  }).catch(() => {
    alert("eposta gönderilmede sıkıntı var")
  });
}



//! ******************** BLOGS ****************************

//* Verileri database eklemek için yazılan firebase methodu ve onun fonksiyonu
export const addBlog = (blogValue) => {
  const db = getDatabase();
  const userRef = ref(db,"blogs");
  const newUserRef = push(userRef);
  set(newUserRef, blogValue)
};

