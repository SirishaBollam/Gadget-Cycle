import ButtonGoogle from './ButtonGoogle';
import './ThankYouTrackingNo.css';
import TrackingNumberCopy from './TrackingNumberCopy';
import thankyou from './images/thankyou.png';
import ButtonUni from './ButtonUni';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getTrackingNo from './services/getTrackingNo';
import updateDocument from './services/updateFirestoreDocument';

function ThankYouTrackingNo() {

    const [trackingNo, setTrackingNo] = useState(null);
    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/');
    }
    
    useEffect(() => {
        const fetchTrackingNo = async () => {
            try {
                const trackingNoData = await getTrackingNo(); 
                setTrackingNo(trackingNoData.latest_tracking_no);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTrackingNo();
    }, []);

    return (
        <div className='thank-you-tracking-no-page'>
            <Header />
            <div className='thank-you-tracking-no-container'>
                <h1>Thank You</h1>
                <img src={thankyou} alt='thankyou-img' />
                <TrackingNumberCopy tracking_number_value={trackingNo} label_content="Your Tracking No" width="461px" />
                <ButtonUni content="Home" height="62px" width="461px" margin_top="27px" onClick={handleHomeButton} />
            </div>
        </div>
    );
}

export default ThankYouTrackingNo;
