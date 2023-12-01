import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: "clone-49482.firebaseapp.com",
  projectId: "clone-49482",
  storageBucket: "clone-49482.appspot.com",
  messagingSenderId: "346654562696",
  appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);