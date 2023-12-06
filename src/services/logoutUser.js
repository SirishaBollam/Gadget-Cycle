import { auth } from '../firbase/config';

const logoutUser = () => {
    return auth.signOut();
}
