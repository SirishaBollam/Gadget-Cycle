import { db } from '../firbase/config';
import { collection, addDoc } from 'firebase/firestore';

const addDocumentToCollection = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id; 
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; 
  }
};

export default addDocumentToCollection;
