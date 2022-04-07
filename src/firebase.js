import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDNWkOs__HigHxh9XA-u36F33cRZVfGn6k",
  authDomain: "ccl-project-a7b83.firebaseapp.com",
  projectId: "ccl-project-a7b83",
  storageBucket: "ccl-project-a7b83.appspot.com",
  messagingSenderId: "451759543521",
  appId: "1:451759543521:web:ffbbd002f288be9a3ad3a0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth();
export const db = getFirestore(app);

