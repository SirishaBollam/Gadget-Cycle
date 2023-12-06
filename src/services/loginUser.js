import { auth } from '../firbase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
};

export default loginUser;
