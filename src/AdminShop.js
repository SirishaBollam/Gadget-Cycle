import { useState } from 'react';
import './AdminShop.css';
import BigFormLabelInput from './BigFormLabelInput';
import ButtonUni from './ButtonUni';
import ImageUploadInput from './ImageUploadInput';
import getProductById from './services/getProductById';
import { useParams } from 'react-router-dom';
import updateDocument from './services/updateFirestoreDocument';
import { documentId } from 'firebase/firestore';
import { uploadImage } from './services/uploadImage';

function AdminShop() {
    const [productName, setProductName] = useState('');
    const [primaryImage, setPrimaryImage] = useState(null);
    const [secondaryImage1, setSecondaryImage1] = useState(null);
    const [secondaryImage2, setSecondaryImage2] = useState(null);
    const [secondaryImage3, setSecondaryImage3] = useState(null);
    const [secondaryImage4, setSecondaryImage4] = useState(null);
    const [secondaryImage5, setSecondaryImage5] = useState(null);
    const [gadgetInfo, setGadgetInfo] = useState([{ type: '', value: ''}, { type: '', value: ''}]);
    const [technicalDetails, setTechnicalDetails] = useState([{ type: '', value: ''}, { type: '', value: ''}]);
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState(null);
    const { productId } = useParams();


    useState(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(productId);
                setProduct(productData)
                setProductName(productData.name);
                setGadgetInfo(productData.gadget_info);
                setCategory(productData.category);
                setPrimaryImage(productData.primaryImage);
                setSecondaryImage1(productData.secondaryImage1);
                setSecondaryImage2(productData.secondaryImage2);
                setSecondaryImage3(productData.secondaryImage3);
                setSecondaryImage4(productData.secondaryImage4);
                setSecondaryImage5(productData.secondaryImage5);
                setTechnicalDetails(productData.technical_details);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct();
    }, []);



    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    }

    const handlePrimaryImageChange = (image) => {
        console.log(image);
        setPrimaryImage(image);
    }

    const handleSecondImageOneChange = (image) => {
        console.log(image);
        setSecondaryImage1(image);
    }

    const handleSecondImageTwoChange = (image) => {
        console.log(image);
        setSecondaryImage2(image);
    }

    const handleSecondImageThreeChange = (image) => {
        console.log(image);
        setSecondaryImage3(image);
    }

    const handleSecondImageFourChange = (image) => {
        console.log(image);
        setSecondaryImage4(image);
    }

    const handleSecondImageFiveChange = (image) => {
        console.log(image);
        setSecondaryImage5(image);
    }

    const handleGadgetInfoChange = (index, event, field) => {
        const newGadgetInfo = [...gadgetInfo];
        newGadgetInfo[index][field] = event.target.value;
        setGadgetInfo(newGadgetInfo);
    };

    const addGadgetInfoRow = () => {
        setGadgetInfo([...gadgetInfo, { type: '', value: '' }]);
    };

    const handleTechnicalDetailsChange = (index, event, field) => {
        const newTechnicalDetails = [...technicalDetails];
        newTechnicalDetails[index][field] = event.target.value;
        setTechnicalDetails(newTechnicalDetails);
    }

    const addTechnicalDetailsRow = () => {
        setTechnicalDetails([...technicalDetails, { type: '', value: ''}]);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const updateProductName = () => {
        const updatedData = { name: productName };
        updateDocument('products', productId, updatedData);
    };

    const onPublish = async () => {
        const newData = {
            name: productName,
            primaryImage: "none",
            secondaryImage1: "none",
            secondaryImage2: "none",
            secondaryImage3: "none",
            secondaryImage4: "none",
            secondaryImage5: "none",
            gadget_info: gadgetInfo,
            technical_details: technicalDetails,
            category: category
        }

        if (primaryImage) {
            try {
                const uploadedImageUrl = await uploadImage(primaryImage, productId);
                newData.primaryImage = uploadedImageUrl;
                console.log(uploadedImageUrl);
            } catch (error) {
                console.log(error);
            }
        }

        if (secondaryImage1) {
            try {
                const uploadedImageUrl = await uploadImage(secondaryImage1, productId);
                newData.secondaryImage1 = uploadedImageUrl;
            } catch (error) {
                console.log(error);
            }
        }

        if (secondaryImage2) {
            try {
                const uploadedImageUrl = await uploadImage(secondaryImage2, productId);
                newData.secondaryImage2 = uploadedImageUrl;
            } catch (error) {
                console.log(error);
            }
        }

        if (secondaryImage3) {
            try {
                const uploadedImageUrl = await uploadImage(secondaryImage3, productId);
                newData.secondaryImage3 = uploadedImageUrl;
            } catch (error) {
                console.log(error);
            }
        }

        if (secondaryImage4) {
            try {
                const uploadedImageUrl = await uploadImage(secondaryImage4, productId);
                newData.secondaryImage4 = uploadedImageUrl;
            } catch (error) {
                console.log(error);
            }
        }

        if (secondaryImage5) {
            try {
                const uploadedImageUrl = await uploadImage(secondaryImage5, productId);
                newData.secondaryImage5 = uploadedImageUrl;
            } catch (error) {
                console.log(error);
            }
        }

        updateDocument('products', productId, newData);
    }

    return (
        <div className='admin-shop-page-container'>
            <h1>Shop</h1>
            <div className='admin-shop-container'>
                <div className='product-name-row-div'>
                    <BigFormLabelInput label="Product Name" width="669px" value={productName} onChnage={handleProductNameChange}/>
                    <ButtonUni width="275.210px" height="53px" content="Update" onClick={updateProductName} />
                </div>
                <div className='primary-image-whole-div'>
                    <label htmlFor='primary-image' className='admin-shop-labels'>Upload Primary Image</label>
                    <div className='primary-image-div'>
                        {primaryImage ? (
                            <ImageUploadInput id='primary-image' src_img={primaryImage} updateImage={handlePrimaryImageChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput id='primary-image' updateImage={handlePrimaryImageChange}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className='secondary-images-whole-div'>
                    <label className='admin-shop-labels'>Upload Secondary Images</label>
                    <div className='secondary-images-div' id='secondary-images-div'>
                        {secondaryImage1 ? (
                            <ImageUploadInput src_img={secondaryImage1} updateImage={handleSecondImageOneChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput updateImage={handleSecondImageOneChange}/>
                            </div>
                        )}
                        {secondaryImage2 ? (
                            <ImageUploadInput src_img={secondaryImage2} updateImage={handleSecondImageTwoChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput updateImage={handleSecondImageTwoChange}/>
                            </div>
                        )}
                        {secondaryImage3 ? (
                            <ImageUploadInput src_img={secondaryImage3} updateImage={handleSecondImageThreeChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput updateImage={handleSecondImageThreeChange}/>
                            </div>
                        )}
                        {secondaryImage4? (
                            <ImageUploadInput src_img={secondaryImage4} updateImage={handleSecondImageFourChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput updateImage={handleSecondImageFourChange}/>
                            </div>
                        )}
                        {secondaryImage5 ? (
                            <ImageUploadInput src_img={secondaryImage5} updateImage={handleSecondImageFiveChange}/>
                        ) : (
                            <div>
                                <ImageUploadInput updateImage={handleSecondImageFiveChange}/>
                            </div>
                        )}
                    </div>
                </div>
                <label className='admin-shop-labels' id='gadget-info-label'>Gadget Info</label>
                <div className='gadget-info-div'>
                    <div className=''>
                        {gadgetInfo.map((info, index) => (
                            <div className='gadget-info-input-row-div'>
                                <input 
                                    className='gadget-info-input'
                                    type='text'
                                    value={info.key}
                                    onChange={(event) => handleGadgetInfoChange(index, event, 'type')}
                                />
                                <input
                                    className='gadget-info-input'
                                    type='value'
                                    value={info.value}
                                    onChange={(event) => handleGadgetInfoChange(index, event, 'value')}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <ButtonUni content="+" height="53px" width="208.478px" />
                    </div>
                </div>
                <label className='admin-shop-labels' id='gadget-info-label'>Technical Details</label>
                <div className='gadget-info-div'>
                    <div className=''>
                        {technicalDetails.map((info, index) => (
                            <div className='gadget-info-input-row-div'>
                                <input 
                                    className='gadget-info-input'
                                    type='text'
                                    value={info.key}
                                    onChange={(event) => handleTechnicalDetailsChange(index, event, 'type')}
                                />
                                <input
                                    className='gadget-info-input'
                                    type='value'
                                    value={info.value}
                                    onChange={(event) => handleTechnicalDetailsChange(index, event, 'value')}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <ButtonUni content="+" height="53px" width="208.478px" />
                    </div>
                </div>
                <div className='category-row-div'>
                    <BigFormLabelInput label="Category" width="669px" value={category} onChnage={handleCategoryChange}/>
                    <ButtonUni width="275.210px" height="53px" content="Update" />
                </div>
                <div className='publish-btn-div'>
                    <ButtonUni content="publish" width="275.21px" height="53px" margin_top="66px" onClick={onPublish} />
                </div>
            </div>
        </div>
    );
}

export default AdminShop;
