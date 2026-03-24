import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIh7tGekk32qOu4GeGRwLQLd7pcqhpwe4",
  authDomain: "cyberaudit-saas.firebaseapp.com",
  projectId: "cyberaudit-saas",
  storageBucket: "cyberaudit-saas.firebasestorage.app",
  messagingSenderId: "145472872909",
  appId: "1:145472872909:web:76104555046547af4ce484"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
