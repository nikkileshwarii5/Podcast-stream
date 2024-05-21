// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMbWlk1q8ZeimCZuwOEb4vS6K936wFKHg",
  authDomain: "podcast1-62e27.firebaseapp.com",
  projectId: "podcast1-62e27",
  storageBucket: "podcast1-62e27.appspot.com",
  messagingSenderId: "187940785479",
  appId: "1:187940785479:web:ff62e1c08a26e341f25062",
  measurementId: "G-MBJZDWTQEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;