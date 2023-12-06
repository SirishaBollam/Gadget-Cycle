import './OurStorySection.css';
import PurposeCard from './PurposeCard';
import SectionHeadings from './SectionHeadings';
import bigDivImg from './images/big_div_img.png';
import purposeBoxImg1 from './images/purpose_box_blue_img.svg';
import purposeBoxImg2 from './images/purpose_box_yellow_img.svg';


function OurStorySection() {
    return (
        <div className='our-story-section'>
            <SectionHeadings heading="Our Story" subheading_line1="Shaping a Future of Learning Through" subheading_line2="Sustainable Tech Solutions."/>
            <div className='big-div'>
                <p>
                    GadgetCycle began as a visionary class project in a Software Quality and 
                    Security Management course at Boston University. 
                    Our team, a diverse group of students passionate about technology and 
                    sustainability, saw an opportunity to make a tangible difference. 
                    We recognized the dual challenge of e-waste and the digital divide in 
                    education and set out to address it through innovative solutions. Our 
                    journey started in the classroom, where we combined our knowledge 
                    of software quality, security management, and a shared commitment to environmental 
                    sustainability. We brainstormed, designed, and developed the GadgetCycle 
                    concept, aiming to create a platform that is not only technologically sound but 
                    also secure and user-friendly.
                </p>
                <img src={bigDivImg} alt='big-div-img'/>
            </div>
            <div className='purpose-cards-row-div'>
                <PurposeCard heading="Our Approach." subheading="We refurbish donated gadgets and repurpose them for educational use, combining sustainability with technology in schools." img_src={purposeBoxImg1}/>
                <PurposeCard heading="Making a Difference." subheading="Each gadget we repurpose aids education and curbs e-waste, demonstrating the power of technology in shaping a sustainable future." img_src={purposeBoxImg2}/>
            </div>
        </div>
    );
}

export default OurStorySection;
