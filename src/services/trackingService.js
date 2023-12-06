import { db } from '../firbase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const fetchTrackingInfo = async (trackingNumber, email) => {
  try {
    const trackingNumberInt = parseInt(trackingNumber)
    const trackingRef = collection(db, 'trackings');
    const q = query(trackingRef, where('trackingNo', '==', trackingNumberInt), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return null;
    }

    const trackingData = querySnapshot.docs[0].data();

    return {
      fedexTrackingNo: trackingData.fedexTrackingNo,
      statusNo: trackingData.statusNo
    };
  } catch (error) {
    console.error('Error fetching tracking data: ', error);
    throw new Error(error.message);
  }
};

export default fetchTrackingInfo;
