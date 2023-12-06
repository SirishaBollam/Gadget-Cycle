import './ImpactSection.css';
import SectionHeadings from './SectionHeadings';
import ImpactNumberCard from './ImpactNumberCard';
import ImpactContentImage from './impact_content_image.webp';

function ImpactSection() {
    return (
        <div className='impact-section'>
            <SectionHeadings heading="Our Impact" subheading_line1="A glance at the tangible change we've fostered, showcasing the power of " subheading_line2="repurposed technology in enhancing education"/>
            <div className='impact-content'>
                <div className='impact-number-cards'>
                    <ImpactNumberCard heading="1M+" subheading="community members" />
                    <ImpactNumberCard heading="150+" subheading="community groups" />
                    <ImpactNumberCard heading="50+" subheading="countries represented" />
                </div>
                <img src={ImpactContentImage} alt="impact_content_image" />
            </div>
        </div>
    );
}

export default ImpactSection;
