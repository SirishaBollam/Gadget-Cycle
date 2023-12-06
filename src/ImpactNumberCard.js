import './ImpactNumberCard.css';

function ImpactNumberCard({heading, subheading}) {
    return (
        <div className='impact-number-card'>
            <h2>{heading}</h2>
            <h5>{subheading}</h5>
        </div>
    );
}

export default ImpactNumberCard;
