import { useState, useEffect } from 'react';
import './AdminProductsList.css';
import Header from './Header';
import getAllProductsByCategory from './services/getAllProductsByCategory';
import ButtonUni from './ButtonUni';
import DonationsShopBox from './DonationsShopBox';
import { Link } from 'react-router-dom';


function AdminProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getAllProductsByCategory();
            setProducts(allProducts);
        };

        fetchProducts();
    }, []);

    return (
        <div className='admin-products-page'>
            <Header />
            <div className='heading'>
                <h1>Shop</h1>
                <ButtonUni content="+" height="53px" width="208.478px" />
            </div>
            {products.map(product => (
                <Link key={product.id} to={`/adminshop/${product.id}`}>
                    <DonationsShopBox key1="Device Name" value1={product.name} key2="Date" value2={product.date_test} margin_top="33.21px" />
                </Link>
                // <Link key={donation.id} to={`/donation/${donation.id}`}>
                //     <DonationsShopBox key1="Name" value1={donation.name} key2="Date" value2={donation.date_test} key3="Tracking No" value3={donation.tracking_no}/>
                // </Link>
            ))}
        </div>
    );
}

export default AdminProductsList;
