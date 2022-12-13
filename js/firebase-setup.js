// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAimc4_ij43UDHWVuWXfywofObzr-QgGWU",
    authDomain: "chat-nare.firebaseapp.com",
    databaseURL: "https://chat-nare-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-nare",
    storageBucket: "chat-nare.appspot.com",
    messagingSenderId: "68895204725",
    appId: "1:68895204725:web:bc11d0c432f40b97ac5f3c"
  };
// Initialize Firebase
initializeApp(firebaseConfig);

export default { getDatabase, ref, onValue, push, set };
