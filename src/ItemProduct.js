import './ItemProduct.css';

function ItemProduct({ item_img_src, item_name }) {
    return (
        <div className='item-product'>
            <div className='img-container'>
                <img className='image-item' src={item_img_src} alt={`${item_name} image`} />
            </div>
            <hr className='item-separator'/>
            <h3>{item_name}</h3>
        </div>
    );
}

export default ItemProduct;
