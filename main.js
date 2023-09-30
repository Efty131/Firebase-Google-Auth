import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDUditoyJ2eKQXBHdLt6qUhcGfH9zsPuro",
  authDomain: "read-write-9afa4.firebaseapp.com",
  databaseURL: "https://read-write-9afa4-default-rtdb.firebaseio.com",
  projectId: "read-write-9afa4",
  storageBucket: "read-write-9afa4.appspot.com",
  messagingSenderId: "840266526710",
  appId: "1:840266526710:web:d3685f9f721de92d9a61d7",
  measurementId: "G-7PY3QHN3T3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// sign in
const googleBtn = document.getElementById("google-login-btn");
googleBtn.addEventListener("click", function(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log("Success");
    console.log(user);
    document.querySelector(".userInfo").style.display = 'block';
    document.getElementById("name").innerText = user.displayName;
    document.getElementById("email").innerText = user.email;
    document.getElementById("pic").src = user.photoURL;
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
});