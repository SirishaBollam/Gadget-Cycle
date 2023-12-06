import { db } from '../firbase/config';
import { doc, setDoc } from 'firebase/firestore';

const updateDocument = async (collectionPath, documentId, data) => {
  try {
    const documentRef = doc(db, collectionPath, documentId);
    await setDoc(documentRef, data, { merge: true });
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

export default updateDocument;
