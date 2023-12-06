import { auth } from '../firbase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    }  catch (error) {
        console.error("Error registering new user:", error);
        throw error;
    }
};

export default registerUser;
