import { useEffect, useState } from 'react';
import './AdminDonationInfoPage.css';
import BigFormLabelInput from './BigFormLabelInput';
import Header from './Header';
import DonationsShopBoxKeyValue from './DonationsShopBoxKeyValue';
import TrackingNumberCopy from './TrackingNumberCopy';
import TrackingStatus from './TrackingStatus';
import ButtonUni from './ButtonUni';
import { useParams } from 'react-router-dom';
import getDonationById from './services/getDonationById';
import updateDocument from './services/updateFirestoreDocument';

function AdminDonationInfoPage() {

    const [isIndi, setIsIndi] = useState(true);
    const [gadgets, setGadgets] = useState([]);
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('pickup');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [apartmentNo, setApartmentNo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(null);
    const [moreDetails, setMoreDetails] = useState('');
    const [donation, setDonation] = useState(null);
    const [date, setDate] = useState('');
    const [fedexTrackingNo, setFedexTrackingNo] = useState('');
    const [trackingNo, setTrackingNo] = useState('');
    const [deliveryStatusNo, setDeliveryStatusNo] = useState(1);
    const { donationId } = useParams();

    useEffect(() => {
        const fetchDonation = async () => {
            console.log(donationId);
            try {
                const donationData = await getDonationById(donationId);
                setDonation(donationData);
                setZipcode(donationData.zipcode);
                setGadgets(donationData.gadgets);
                setAddressLine1(donationData.address_line1);
                setAddressLine2(donationData.address_line2);
                setApartmentNo(donationData.apt_no);
                setCity(donationData.city);
                setMoreDetails(donationData.more_details);
                setState(donationData.state);
                setDate(donationData.date_test);
                setTrackingNo(donationData.tracking_no);
                setFedexTrackingNo(donationData.fedex_tracking_no);
                setDeliveryStatusNo(donationData.delivery_status_no);
                setSelectedDeliveryOption(donationData.delivery_option);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDonation();
    }, []);

    const handleFedexTrackingNoChange = (e) => {
        setFedexTrackingNo(e.target.value);
        console.log(e.target.value);
    }

    const updateFedexTrackingNo = () => {
        const updatedData = { fedex_tracking_no: fedexTrackingNo };
        updateDocument('donations', donationId, updatedData);
    };

    const updateStatusNo = (status_no) => {
        console.log(`yes yes ${status_no}`);
        setDeliveryStatusNo(status_no);
    }

    const handleStatusNumberUpdate = () => {
        const updatedData = { delivery_status_no: deliveryStatusNo };
        updateDocument('donations', donationId, updatedData);
    }

    return (
        <div className='admin-donations-info-page'>
            <Header />
            <div className='page-heading'>
                <h1>Donations</h1>
            </div>
            <div className='indi-corp-form-contianer' id='donations-info-indi-corp-form-contianer'>
                <div className='heading' style={{ paddingLeft: "77.48px" }}>
                    {isIndi ? (<h1>Individual</h1>) : (<h1>Corporate</h1>)}
                    <h4>to get Started</h4>
                </div>
                <div className='indi-corp-form-gadgets'>
                    {gadgets.map((gadget, index) => (
                        <div key={index}>
                            <h5>Gadget {index + 1}</h5>
                            <BigFormLabelInput 
                                placeholder="Dell"
                                label="Brand Name"
                                value={gadget.brand_name}
                                width="902.809px"
                            />
                            <BigFormLabelInput
                                placeholder="0123456789"
                                label="Model No#"
                                value={gadget.model_no}
                                width="902.809px"
                            />
                            <BigFormLabelInput
                                placeholder="New"
                                label="Condition"
                                value={gadget.condition}
                                width="902.809px"
                            />
                            <BigFormLabelInput
                                placeholder="New"
                                label="Number of Items"
                                value={gadget.no_of_items}
                                width="902.809px"
                            />
                        </div>
                    ))}
                </div>
                <div className='select-delivery-option-div' style={{ width: "902.809px"}}>
                    <fieldset className='select-delivery-option-fieldset'>
                        <legend>Select Delivery Option</legend>
                        <label>
                            <input
                                type="radio"
                                value="pickup"
                                checked={selectedDeliveryOption === 'pickup'}
                            />
                            Pickup
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="drop-off"
                                checked={selectedDeliveryOption === 'drop-off'}
                            />
                            Drop-off
                        </label>
                    </fieldset>
                </div>
                {selectedDeliveryOption === 'pickup' && (
                    <div>
                        <BigFormLabelInput
                            label="Address Line 1"
                            value={addressLine1}
                            width="902.809px"
                        />
                        <BigFormLabelInput
                            label="Address Line 2"
                            value={addressLine2}
                            width="902.809px"
                        />
                        <BigFormLabelInput
                            label="Apartment, Suite, etc"
                            value={apartmentNo}
                            width="902.809px"
                        />
                        <BigFormLabelInput
                            label="City"
                            value={city}
                            width="902.809px"
                        />
                        <BigFormLabelInput
                            label="State/Province"
                            value={state}
                            width="902.809px"
                        />
                    </div>
                )}
                <BigFormLabelInput
                    label="Zipcode"
                    value={zipcode}
                    width="902.809px"
                />
                <label className='more-details-label' htmlFor='indi-corp-more-details' >
                    More Details
                    <textarea
                        className='indi-corp-more-details'
                        value={moreDetails}
                        id='indi-corp-more-details'
                        style={{ width: "902.809px"}}
                    />
                </label>
            </div>
            <div className='admin-don-info-page-tracking-total-container'>
                <div className='heading-div'>
                    <h2>Tracking</h2>
                    <div className='heading-key-value-div'>
                        <DonationsShopBoxKeyValue key_test="Date" value={date}/>
                        <DonationsShopBoxKeyValue key_test="Tracking No" value={trackingNo}/>
                    </div>
                </div>
                <div className='admin-don-info-page-tracking-container'>
                    <div className='tracking-number-copy-div' style={{}}>
                        <label className='label' htmlFor="input-tracking-number-copy">
                            Your Fedex Tracking No
                        </label>
                        <div className='label-copy-div'>
                            <input 
                                type='text'
                                style={{ width: "617px"}}
                                value={fedexTrackingNo}
                                onChange={handleFedexTrackingNoChange}
                                name="input-tracking-number-copy"
                                className='input-tracking-number-copy'
                            />
                            <ButtonUni
                                content="Update"
                                height="53px"
                                width="253.953px"
                                onClick={updateFedexTrackingNo}
                            />
                        </div>
                    </div>
                    <TrackingStatus margin_top="58px" margin_left="35.95px" status_number={deliveryStatusNo} updateStatusNo={updateStatusNo}/>
                    <ButtonUni content="Update" width="253.953px" height="53px" margin_top="25px" onClick={handleStatusNumberUpdate}/>
                </div>
            </div>
        </div>
    );
}

export default AdminDonationInfoPage;
