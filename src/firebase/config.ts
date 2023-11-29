import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: "clone-49482.firebaseapp.com",
  projectId: "clone-49482",
  storageBucket: "clone-49482.appspot.com",
  messagingSenderId: "346654562696",
  appId: "1:346654562696:web:5b6f99e352e6695d6a023d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
