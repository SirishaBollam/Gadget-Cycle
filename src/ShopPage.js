import './ShopPage.css';
import ItemProduct from './ItemProduct';
import CategoryButton from './CategoryButton';
import Pagination from './Pagination';
import Header from './Header';
import itemImage from './images/ItemImage1.jpg';
import { useEffect, useState } from 'react';
import getAllProductsByCategory from './services/getAllProductsByCategory';
import { Link } from 'react-router-dom';

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [noOfProducts, setNoOfProducts] = useState(41);
    const [categorySelected, setCategorySelected] = useState('');
    const [noOfItemsPerPage, setNoOfItemsPerPage] = useState(9);
    const [noOfPages, setNoOfPages] = useState(Math.ceil(noOfProducts / noOfItemsPerPage));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getAllProductsByCategory();
            setProducts(allProducts);
        }
        fetchProducts();
    }, []);

    const handleNoItemsPerPageChange = (noOfItems) => {
        setNoOfItemsPerPage(noOfItems);
        setNoOfPages(Math.ceil(noOfProducts / noOfItems));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (products.length === 0) {
        return (
            <div>

            </div>
        );
    }

    return (
        <div className='shop-page-container'>
            <Header />
            <div className='category-buttons-div'>
                <CategoryButton category="Computer" />
                <CategoryButton category="Laptop" />
                <CategoryButton category="Tablet" />
                <CategoryButton category="Monitor" />
                <CategoryButton category="Other" />
            </div>
            <div className='grid-shop-page-container'>
                <div className='grid-shop-container'>
                    {products.map(product => (
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <ItemProduct item_img_src={product.primaryImage} item_name={product.name} />
                        </Link>
                    ))}
                </div>
            </div>
            <Pagination totalPages={noOfPages} onPageChange={handlePageChange}/>
        </div>
    );
}

export default ShopPage;
