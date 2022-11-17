import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBhXdDy313YnKf-eHYoqwWlJ0j0SS7Ye_c',
  authDomain: 'linkedin-clone-18d46.firebaseapp.com',
  projectId: 'linkedin-clone-18d46',
  storageBucket: 'linkedin-clone-18d46.appspot.com',
  messagingSenderId: '412499140988',
  appId: '1:412499140988:web:fb88fb5b0e37f54aa484f9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
