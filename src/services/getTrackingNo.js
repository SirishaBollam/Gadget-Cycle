import { db } from '../firbase/config';
import { getDoc, doc } from 'firebase/firestore';


const getTrackingNo = async () => {
    const docRef = doc(db, 'trackingNo', 'latest_tracking_no');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('Document does not exist!');
    }
}

export default getTrackingNo;
