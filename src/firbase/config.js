import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyCt8_qtGVN379FFU11ByqPus4pp4bAz03E",
  // authDomain: "gadgetcycle-701b3.firebaseapp.com",
  // projectId: "gadgetcycle-701b3",
  // storageBucket: "gadgetcycle-701b3.appspot.com",
  // messagingSenderId: "305902755886",
  // appId: "1:305902755886:web:fa325618cf7258e0bd3fbf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
