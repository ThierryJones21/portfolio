import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzvRuF0RuTXVSIe5ho8xPRJMxTiNI3fxo",
    authDomain: "portfolio-tetris.firebaseapp.com",
    projectId: "portfolio-tetris",
    storageBucket: "portfolio-tetris.appspot.com",
    messagingSenderId: "815798165093",
    appId: "1:815798165093:web:77a55ab68cb5f9427a708c",
    measurementId: "G-ZKK9S8YJ3R"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
