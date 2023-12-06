import './ProductInfoTopPart.css';
import GadgetInfoRow from './GadgetInfoRow';
import ButtonUni from './ButtonUni';
import verify_img from './images/verify.svg';
import truck_img from './images/truck.svg';
import tick_availability_img from './images/tick_availability.svg';
import { useEffect } from 'react';

function ProductInfoTopPart({product_name, primary_img, secondary_images, gadget_info}) {

    useEffect(() => {
        console.log(secondary_images);
    }, []);

    return (
        <div id='product-info-top-part-container'>
            <div id='product-info-images-div'>
                <div id='primary-image-div'>
                    <img src={primary_img} className='image-primary' alt='image-primary'/>
                </div>
                <div id='secondary-images-div'>
                    {secondary_images.map((secondary_image, index) => (
                        <img src={secondary_image} className='secondary-image' alt='secondary-image'/>
                    ))}
                </div>
            </div>
            <div id='gadget-info-div'>
                <h1>{product_name}</h1>
                <div id='benfits-div'>
                    <div id='benfit-div'>
                        <img src={verify_img} alt='verify-img' id='verify-img'/>
                        <div className='test-div'>
                            <p>Guranteed</p> 
                        </div>
                        {/* <p>Guranteed</p> */}
                    </div>
                    <div id='benfit-div'>
                        <img src={truck_img} alt='truck-img' id='truck-img'/>
                        <div id='test-div'>
                            <p>Free Delivery</p>
                        </div>
                        {/* <p>Free Delivery</p> */}
                    </div>
                </div>
                <div id='availability-div'>
                    <p id='para-availability'>Availability:</p>
                    <img src={tick_availability_img} id='tick-availability-img' alt='tick-availability-img'/>
                    <p id='para-in-stock'>In stock</p>
                </div>
                <div id='pro-info-gadget-info-div'>
                    {gadget_info.map((gadget_info_row, index) => (
                        <GadgetInfoRow key_left={gadget_info_row.key} value={gadget_info_row.value} />
                    ))}
                </div>
                <ButtonUni 
                    content="Send Inquiry"
                    height="66px"
                    width="273px"
                    margin_top="25.5px"
                />
            </div>
        </div>
    );
}

export default ProductInfoTopPart;
