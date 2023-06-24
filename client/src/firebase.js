import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD-6Z5fZrYTXLUwlHWoVK9zJhdjitRg7W4",
  authDomain: "videoapp-7538c.firebaseapp.com",
  projectId: "videoapp-7538c",
  storageBucket: "videoapp-7538c.appspot.com",
  messagingSenderId: "20827860408",
  appId: "1:20827860408:web:3e9f237895e22782a4734d",
  measurementId: "G-SH3F55VHF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;