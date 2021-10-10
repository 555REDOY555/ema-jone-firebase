import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.cnfic";

const initalize = () => {
     initializeApp(firebaseConfig);
}

export default initalize;