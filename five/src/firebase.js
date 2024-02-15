import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWA29xkU1nWNaeQjVFIRRC5LqBC686B7o",
  authDomain: "samrajya-portfolio.firebaseapp.com",
  projectId: "samrajya-portfolio",
  storageBucket: "samrajya-portfolio.appspot.com",
  messagingSenderId: "400914178340",
  appId: "1:400914178340:web:e9c05a5044be5ff8d193b1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()