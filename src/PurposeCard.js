import './PurposeCard.css';

function PurposeCard({heading, subheading, img_src}) {
    return (
        <div className='purpose-card'>
            <div className='top-part'>
                <h2>{heading}</h2>
                <h5>{subheading}</h5>
            </div>
            <img src={img_src} alt="purpose_image" />
        </div>
    );
}

export default PurposeCard;
