// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62ixIuINNl6GXVkOBfLAN_fZaaHft-IA",
  authDomain: "automotive-client-site.firebaseapp.com",
  projectId: "automotive-client-site",
  storageBucket: "automotive-client-site.appspot.com",
  messagingSenderId: "678750004135",
  appId: "1:678750004135:web:c0c42221149134d40a0c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;