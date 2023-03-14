import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_qKpda3DrAZ2IM9mtHdd6FzOI9wh7OvI",
  authDomain: "shart-29151.firebaseapp.com",
  projectId: "shart-29151",
  storageBucket: "shart-29151.appspot.com",
  messagingSenderId: "182945632917",
  appId: "1:182945632917:web:32043c5633aafd509cc19c",
  measurementId: "G-L1S9VK5JD5",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the Firebase authentication instance
export const auth = getAuth(app);
