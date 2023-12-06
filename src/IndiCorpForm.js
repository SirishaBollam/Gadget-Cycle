import './IndiCorpForm.css';
import BigFormLabelInput from './BigFormLabelInput';
import React, { useState } from 'react';
import AddSubButton from './AddSubButton';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import ButtonUni from './ButtonUni';
import addDocumentToCollection from './services/addDocumentToCollection';
import updateDocument from './services/updateFirestoreDocument';
import getTrackingNo from './services/getTrackingNo';

function IndiCorpForm() {
    const modelGadget = {
        brand: ' ',
        model: ' ',
        condition: 'New',
        number: ' '
    };

    const [donatorName, setDonatorName] = useState('');
    const [gadgets, setGadgets] = useState([{ ...modelGadget }]);
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('pickup');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [apartmentNo, setApartmentNo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(null);
    const [moreDetails, setMoreDetails] = useState('');
    const [isSelectedTandC, setIsSelectedTandC] = useState(false);
    const { donatorType } = useParams();
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [trackingNo, setTrackingNo] = useState(null);

    const addGadget = () => {
        setGadgets([...gadgets, { ...modelGadget }])
    };

    const removeGadget = () => {
        if (gadgets.length > 1) {
            setGadgets(gadgets.slice(0, -1));
        }
    };

    const handleInputChange = (index, field, value) => {
        const newGadgets = [...gadgets];
        newGadgets[index][field] = value;
        setGadgets(newGadgets);
    };

    const handleNameChange = (e) => {
        setDonatorName(e.target.value);
    }

    const handleDeliveryOptionChange = (e) => {
        setSelectedDeliveryOption(e.target.value);
    };

    const handleAddressLineOneChange = (e) => {
        setAddressLine1(e.target.value);
    };

    const handleAddressLineTwoChange = (e) => {
        setAddressLine2(e.target.value);
    };

    const handleApartmentNumberChange = (e) => {
        setApartmentNo(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleMoreDetailsChange = (e) => {
        setMoreDetails(e.target.value);
    };

    const handleAcceptedTandCChange = (e) => {
        setIsSelectedTandC(e.target.checked);
    }

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!isSelectedTandC || isSubmitDisabled) return;
        setIsSubmitDisabled(true);

        const date = new Date();
        const day = date.getDate(); 
        const month = date.getMonth() + 1; 
        const year = date.getFullYear(); 

        let data = {
            gadgets: gadgets,
            delivery_option: selectedDeliveryOption,
            donator_type: donatorType,
            zipcode: zipcode,
            name: donatorName,
            more_details: moreDetails,
            date_test: `${month}/${day}/${year}`
        }

        try {
            const trackingNoData = await getTrackingNo(); 
            setTrackingNo(trackingNoData.latest_tracking_no);
            const updateTrackingNo = await updateDocument('trackingNo', 'latest_tracking_no', { latest_tracking_no: (trackingNoData.latest_tracking_no + 1)});
            data = { tracking_no: trackingNoData.latest_tracking_no, ...data }
        } catch (error) {
            console.log(error);
        }
            
        if (selectedDeliveryOption === 'pickup') {
            const additionalData = {
                address_line1: addressLine1,
                address_line2: addressLine2,
                apt_no: apartmentNo,
                state: state,
                city: city
            }
            data = {...additionalData, ...data}
            console.log(data);
        }
        try {
            const newDocId = await addDocumentToCollection('donations', data);
            console.log(`New document created with ID: ${newDocId}`);
        } catch (error) {
            console.error("Failed to create new document:", error);
        }

        navigate('/thankyou');
    }

    return (
        <div className='indi-corp-page-total-container'>
            <Header />
            <div className='indi-corp-form-contianer'>
            <div className='heading'>
                {donatorType === 'indi' ? <h1>Individual</h1> : <h1>Corporate</h1>}
                <h4>to get started</h4>
            </div>
            <div className='indi-corp-form-gadgets'>
                <BigFormLabelInput
                    label="Name"
                    value={donatorName}
                    onChnage={(e) => handleNameChange(e)}
                    width="594px"
                />
                {gadgets.map((gadget, index) => (
                    <div key={index}>
                        <h5>Gadget {index + 1}</h5>
                        <BigFormLabelInput 
                            placeholder="Dell"
                            label="Brand Name"
                            value={gadget.brand}
                            onChnage={(e) => handleInputChange(index, 'brand', e.target.value)}
                            width="594px"
                        />
                        <BigFormLabelInput
                            placeholder="0123456789"
                            label="Model No#"
                            value={gadget.model}
                            onChnage={(e) => handleInputChange(index, 'model', e.target.value)}
                            width="594px"
                        />
                        <BigFormLabelInput
                            placeholder="New"
                            label="Condition"
                            value={gadget.condition}
                            onChnage={(e) => handleInputChange(index, 'condition', e.target.value)}
                            width="594px"
                        />
                        <BigFormLabelInput
                            placeholder="New"
                            label="Number of Items"
                            value={gadget.number}
                            onChnage={(e) => handleInputChange(index, 'number', e.target.value)}
                            width="594px"
                        />
                    </div>
                ))}
            </div>
            <div className='add-sub-buttons-div'>
                <AddSubButton 
                    content="+"
                    onClick={addGadget}
                />
                {gadgets.length > 1 && (
                    <AddSubButton 
                        content="-"
                        onClick={removeGadget}
                        disabled={gadgets.length <= 1}
                    />
                )}
            </div>
            <div className='select-delivery-option-div'>
                <fieldset className='select-delivery-option-fieldset'>
                    <legend>Select Delivery Option</legend>
                    <label>
                        <input
                            type="radio"
                            value="pickup"
                            checked={selectedDeliveryOption === 'pickup'}
                            onChange={handleDeliveryOptionChange}
                        />
                        Pickup
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="drop-off"
                            checked={selectedDeliveryOption === 'drop-off'}
                            onChange={handleDeliveryOptionChange}
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
                        onChnage={handleAddressLineOneChange}
                        width="594px"
                    />
                    <BigFormLabelInput
                        label="Address Line 2"
                        value={addressLine2}
                        onChnage={handleAddressLineTwoChange}
                        width="594px"
                    />
                    <BigFormLabelInput
                        label="Apartment, Suite, etc"
                        value={apartmentNo}
                        onChnage={handleApartmentNumberChange}
                        width="594px"
                    />
                    <BigFormLabelInput
                        label="City"
                        value={city}
                        onChnage={handleCityChange}
                        width="594px"
                    />
                    <BigFormLabelInput
                        label="State/Province"
                        value={state}
                        onChnage={handleStateChange}
                        width="594px"
                    />
                </div>
            )}
            <BigFormLabelInput
                label="Zipcode"
                value={zipcode}
                onChnage={handleZipcodeChange}
                width="594px"
            />
            <label className='more-details-label' htmlFor='indi-corp-more-details'>
                More Details
                <textarea
                    className='indi-corp-more-details'
                    value={moreDetails}
                    onChange={handleMoreDetailsChange}
                    id='indi-corp-more-details'
                />
            </label>
                <div className='terms-and-conditions-check-div' style={{ width: "594.265px", marginLeft: "0px"}}>
                    <label className='terms-and-conditions-check'>
                        <input
                            type="checkbox"
                            onChange={handleAcceptedTandCChange}
                            checked={isSelectedTandC}
                        />
                        <div><p>Agree to Our terms and Conditions</p></div>
                    </label>
                </div>
                <ButtonUni content="Submit" height="66.058px" width="594.265px" margin_top="59.51px" onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default IndiCorpForm;
