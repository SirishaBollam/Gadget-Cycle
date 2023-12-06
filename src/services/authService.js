import { auth } from '../firbase/config';

export const isAuthenticated = () => {
    return new Promise((resolve) => {
        auth.onAuthStateChanged(user => {
            resolve(user);
        });
    });
};