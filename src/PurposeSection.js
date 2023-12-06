import './PurposeSection.css';
import SectionHeadings from './SectionHeadings';
import PurposeCard from './PurposeCard';
import PurposeCardImage1 from './purpose_card_image1.webp';
import PurposeCardImage2 from './purpose_card_image2.webp';

function PurposeSection() {
    return (
        <div>
            <SectionHeadings heading="Our Purpose" subheading_line1="Shaping a Future of Learning Through" subheading_line2="Sustainable Tech Solutions." />
            <div className='purpose-cards'>
                <PurposeCard heading="Mission." subheading="GadgetCycle revitalizes donated gadgets, turning them into impactful educational resources to bridge the digital divide." img_src={PurposeCardImage1} />
                <PurposeCard heading="Vision." subheading="We envision a future where accessible education and reduced electronic waste converge, creating a community united by sustainable solutions." img_src={PurposeCardImage2} />
            </div>
        </div>
    );
}

export default PurposeSection;