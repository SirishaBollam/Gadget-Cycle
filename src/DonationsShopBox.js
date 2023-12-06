import './DonationsShopBox.css';
import DonationsShopBoxKeyValue from './DonationsShopBoxKeyValue';
import externalLinkImage from './images/External Link.png';

function DonationsShopBox({ key1, key2, key3, value1,  value2, value3, margin_top }) {
    return (
        <div className='donations-shop-box' style={{ marginTop: margin_top }}>
            <div className='box-info-div'>
                <DonationsShopBoxKeyValue key_test={key1} value={value1} />
                <div className='donations-shop-box-lower-row'>
                    <DonationsShopBoxKeyValue key_test={key2} value={value2} />
                    {key3 && <DonationsShopBoxKeyValue key_test={key3} value={value3} />}
                </div>
            </div>
            <img src={externalLinkImage} alt='external-link-image'/>
        </div>
    );
}

export default DonationsShopBox;
