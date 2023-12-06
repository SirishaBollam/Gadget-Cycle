import { db } from '../firbase/config';
import { getDoc, doc } from 'firebase/firestore';


const getDonationById = async (id) => {
    const docRef = doc(db, 'donations', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('Document does not exist!');
    }
}

export default getDonationById;
