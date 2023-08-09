import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnEqAAElJ1qpCUk43YxvCX99KiaClde_g",
  authDomain: "chat-58784.firebaseapp.com",
  projectId: "chat-58784",
  storageBucket: "chat-58784.appspot.com",
  messagingSenderId: "820363763922",
  appId: "1:820363763922:web:ae813cf58b80b9b7444d0b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();