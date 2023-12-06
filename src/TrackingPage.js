import { useSearchParams } from 'react-router-dom';
import './TrackingPage.css';
import TrackLabelInput from './TrackLabelInput';
import ButtonUni from './ButtonUni';
import React, { useState } from 'react';
import TrackingNumberCopy from './TrackingNumberCopy';
import TrackingStatus from './TrackingStatus';
import Header from './Header';
import fetchTrackingInfo from './services/trackingService';
import { BrowserRouter as Router, Switch, Route, Link, Routes, useNavigate } from 'react-router-dom';

function TrackingPage() {
    const [submitted, setSubmitted] = useState(false);
    const [donationInfoRequested, setDonationInfoRequested] = useState(false);
    const [email, setEmail] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');
    const [statusNumber, setStatusNumber] = useState(6);
    const [fedexTrackingNo, setFedexTrackingNo] = useState(0);

    const navigate = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("yes");
        console.log(email);
        console.log(trackingNumber);
        try {
            const trackingInfo = await fetchTrackingInfo(trackingNumber, email);
            if (trackingInfo) {
                setStatusNumber(trackingInfo.statusNo);
                setFedexTrackingNo(trackingInfo.fedexTrackingNo);
                setSubmitted(true);
            } else {
                console.log('No ttracking info found for the provided email and tracking number.');
            }
        } catch (error) {
            console.error('Failed to fetch tracking info:', error);
        }
    };

    const handleDonationInfoRequest = (e) => {
        e.preventDefault();
        if (donationInfoRequested) return;
        setDonationInfoRequested(true);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTrackingNumberChange = (e) => {
        setTrackingNumber(e.target.value);
    };


    return (
        <div className='tracking-page-whole-container'>
            <Header />
            <div className='tarcking-page-container'>
                <div className='heading'>
                    <h1>Track Your</h1>
                    <h4>Impact</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <TrackLabelInput
                        label="Tracking No"
                        value={trackingNumber}
                        onChange={handleTrackingNumberChange}
                    />
                    <TrackLabelInput
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <ButtonUni
                        content="Continue"
                        height="62px"
                        width="455px"
                        margin_top="33px"
                    />
                </form>
                {submitted && (
                    <div className='tracking-page-conditional-render-div'>
                        <div className='tracking-number-copy-page-div'>
                            <TrackingNumberCopy 
                                tracking_number_value={fedexTrackingNo} 
                                label_content="Your Fedex Tracking No" 
                                width="455px"
                            />
                        </div>
                        <div className='tracking-status-page-div'>
                            <TrackingStatus 
                                status_number={statusNumber}
                                width="455px"
                            />
                        </div>
                        {statusNumber == 6 && (
                            <ButtonUni 
                                width="455px"
                                height="53px"
                                margin_top="35px"
                                content="Request for Donation Information"
                                onClick={handleDonationInfoRequest}
                            />
                        )}
                        {statusNumber == 6 && donationInfoRequested && (
                            <div className='para-request-donation-info-div'>
                                <p className='para-request-donation-info'>
                                    Thank you for your request we would send you the donation information via email
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrackingPage;
