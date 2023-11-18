import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYKJr5JeHwwmGKneHrulbQPUaunrC0WmM",
  authDomain: "play-pulse-arcade.firebaseapp.com",
  projectId: "play-pulse-arcade",
  storageBucket: "play-pulse-arcade.appspot.com",
  messagingSenderId: "1054096417534",
  appId: "1:1054096417534:web:85d2982494b84e8e24fbaf",
  measurementId: "G-N8XHZD2K4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get the auth service from the Firebase app
const auth = getAuth(app);

export { auth };