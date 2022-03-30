//importo firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//credenciales de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqTzNrfG4VTTEpGcR2iVzEAg_t_jdyoNg",
    authDomain: "comision-25470-8c4cb.firebaseapp.com",
    projectId: "comision-25470-8c4cb",
    storageBucket: "comision-25470-8c4cb.appspot.com",
    messagingSenderId: "321911939220",
    appId: "1:321911939220:web:bbe035db0ca08723e41481"
};

//inicializo
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);