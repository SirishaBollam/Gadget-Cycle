import './GridTest.css';
import ItemProduct from './ItemProduct';
import itemImage from './images/ItemImage1.jpg';

function GridTest() {
    return (
        <div className='grid-page-container'>
            <div className='grid-test-container'>
                <ItemProduct item_img_src={itemImage} item_name="GoPro HERO6 4K Action Camera - Black" />
                <ItemProduct item_img_src={itemImage} item_name="GoPro HERO6 4K Action Camera - Black" />
                <ItemProduct item_img_src={itemImage} item_name="GoPro HERO6 4K Action Camera - Black" />
                <ItemProduct item_img_src={itemImage} item_name="GoPro HERO6 4K Action Camera - Black" />
                <ItemProduct item_img_src={itemImage} item_name="GoPro HERO6 4K Action Camera - Black" />
            </div>
        </div>
    );
}

export default GridTest;
