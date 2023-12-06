import './HowItWorksDesCard.css';

function HowItWorksDesCard({linear_gradient_direction, heading, subheading}) {
    return (
        <div className='how-it-works-des-card'>
            <div className='how-it-works-des-card-inside-div'>
                <div className={linear_gradient_direction}></div>
                <div className='des'>
                    <h4>{heading}</h4>
                    <h5>{subheading}</h5>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksDesCard;
