import { auth } from '../firbase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw error;
    }
};

export default resetPassword;
