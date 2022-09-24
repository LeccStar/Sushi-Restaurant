import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA4cMza_WMwqV6f-yBWtMbmuWLA4cL1dRE",
  authDomain: "mrsushi-sushi.firebaseapp.com",
  projectId: "mrsushi-sushi",
  storageBucket: "mrsushi-sushi.appspot.com",
  messagingSenderId: "215826244059",
  appId: "1:215826244059:web:48e91b07c519113d15c7fe"
};

const app = initializeApp(firebaseConfig);

//Vamos a exportar toda la configurción a una constante

export const db = getFirestore(app)