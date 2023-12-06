import { db } from '../firbase/config';
import { collection, getDocs } from 'firebase/firestore';

const getDonations = async () => {
    const querySnapshot = await getDocs(collection(db, 'donations'));
    const allDonations = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    allDonations.forEach(donation => {
        console.log(donation.id);
        console.log(donation.name);
        console.log(donation.tracking_no);
        console.log(donation.date_test);
    });
    return allDonations;
}

export default getDonations;
