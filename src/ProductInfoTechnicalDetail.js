import './ProductInfoTechnicalDetail.css';

function ProductInfoTechnicalDetail({ index_test, key_test, value }) {
    return (
        <div className='product-info-technical-detail-odd' style={(index_test % 2 == 0) ? { backgroundColor: "#fff", borderRadius: "8px", width: "978px" } : {}}>
            <div className='key'>
                <p>{key_test}</p>
            </div>
            <div className='value'>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default ProductInfoTechnicalDetail;
