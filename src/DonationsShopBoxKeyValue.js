import './DonationsShopBoxKeyValue.css';

function DonationsShopBoxKeyValue({ key_test, value }) {
    return (
        <div>
            <span className='key-span'>{`${key_test}: `} </span>
            <span className='value-span'>{value}</span>
        </div>
    );
}

export default DonationsShopBoxKeyValue;
