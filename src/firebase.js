// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYLS3uurUBGlXVKhlUZudppFOOzjsAJD0",
  authDomain: "sebastians-portfolio-site.firebaseapp.com",
  projectId: "sebastians-portfolio-site",
  storageBucket: "sebastians-portfolio-site.appspot.com",
  messagingSenderId: "145335312505",
  appId: "1:145335312505:web:54aec4404703bac4ddf4a8",
  measurementId: "G-6JED7NM16Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);