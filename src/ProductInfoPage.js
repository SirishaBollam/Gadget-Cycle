import './ProductInfoPage.css';
import Header from './Header';
import ProductInfoTopPart from './ProductInfoTopSection';
import Footer from "./Footer";
import { useState } from 'react';
import getProductById from './services/getProductById';
import { useParams } from 'react-router-dom';
import ProductInfoTechnicalDetail from './ProductInfoTechnicalDetail';

function ProductInfoPage() {
    const [technicalDetails, setTechnicalDetails] = useState([]);
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [gadgetInfo, setGadgetInfo] = useState([]);
    const [primaryImage, setPrimaryImage] = useState(null);
    const [secondaryImage1, setSecondaryImage1] = useState(null);
    const [secondaryImage2, setSecondaryImage2] = useState(null);
    const [secondaryImage3, setSecondaryImage3] = useState(null);
    const [secondaryImage4, setSecondaryImage4] = useState(null);
    const [secondaryImage5, setSecondaryImage5] = useState(null);
    const [secondaryImages, setSecondaryImages] = useState(null);
    const { productId } = useParams();

    useState(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(productId);
                setProduct(productData);
                setTechnicalDetails(productData.technical_details);
                setName(productData.name);
                setGadgetInfo(productData.gadget_info);
                setPrimaryImage(productData.primaryImage);
                setSecondaryImage1(productData.secondaryImage1);
                setSecondaryImage2(productData.secondaryImage2);
                setSecondaryImage3(productData.secondaryImage3);
                setSecondaryImage4(productData.secondaryImage4);
                setSecondaryImage5(productData.setSecondaryImage5);
                setSecondaryImages([productData.secondaryImage1, productData.secondaryImage2, productData.secondaryImage3, productData.secondaryImage4, productData.secondaryImage5]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProduct();
    }, []);

    if (!primaryImage) {
        return (
            <div>

            </div>
        );
    }

    return (
        <div>
            <Header />
            <ProductInfoTopPart product_name={name} gadget_info={gadgetInfo} primary_img={primaryImage} secondary_images={secondaryImages} />
            <div className='technical-details-section-div'>
                <div className='tech-details-heading'>
                    <h2>Technical Details</h2>
                </div>
                {technicalDetails.map((technicalDetail, index) => (
                    <ProductInfoTechnicalDetail key_test={technicalDetail.key} value={technicalDetail.value} index_test={index} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProductInfoPage;
