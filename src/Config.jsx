import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"//auth
const firebaseConfig = {
  apiKey: "AIzaSyCvquMYV38pkkeaUkDnxlEefzJ234Yg4mE",
  authDomain: "fir-85e0f.firebaseapp.com",
  projectId: "fir-85e0f",
  storageBucket: "fir-85e0f.appspot.com",
  messagingSenderId: "422788427571",
  appId: "1:422788427571:web:9cfca3d400322e69aa5846",
  measurementId: "G-KTM2FHDR5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()

