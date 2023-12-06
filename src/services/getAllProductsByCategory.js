import { db } from '../firbase/config';
import { collection, getDocs } from 'firebase/firestore';

const getAllProductsByCategory = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const allProducts = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    allProducts.forEach(product => {
        console.log(product.id);
        console.log(product.name);
    });
    return allProducts;
}

export default getAllProductsByCategory;
