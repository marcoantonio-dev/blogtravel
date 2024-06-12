import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWDiCPDD7_pdql9r9kxhmSKLGHnMXyDeY",
  authDomain: "blogtravel-3d91a.firebaseapp.com",
  projectId: "blogtravel-3d91a",
  storageBucket: "blogtravel-3d91a.appspot.com",
  messagingSenderId: "749577791433",
  appId: "1:749577791433:web:1b00022486f3160e296a18"
};

const app  = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};