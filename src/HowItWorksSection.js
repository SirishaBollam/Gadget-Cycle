import './HowItWorksSection.css';
import SectionHeadings from './SectionHeadings';
import HowItWorksDesCard from './HowItWorksDesCard';
import GradientBackground from './GradientBackground';
import row1_image1 from './row1_image1.webp';
import row1_image2 from './row1_image2.webp';
import row2_image from './row2_image.webp';
import row3_image from './row3_image.webp';

function HowItWorksSection() {
    return (
        <div className='how-it-works-section'>
            <SectionHeadings heading="How It Works" subheading_line1="Transforming Your Old Gadgets into Tools for Education" subheading_line2="A Seamless Journey from Donation to Impact."/>
            <div>
                <div className='how-it-works-row'>
                    <div className='row1-image'>
                        <GradientBackground left_color="#BF4" right_color="#48FFB7" />
                        <div className='row1-inner-div'>
                            <img src={row1_image1} alt="row1_image1" />
                            <img src={row1_image2} alt="row1_image2" />
                        </div>
                    </div>
                    <HowItWorksDesCard linear_gradient_direction="bottom-to-top" heading="“I can just record great tutorials without messing around.”" subheading="Connor Finlayson - Founder, Unicorn Factory" />
                </div>
                <div className='how-it-works-row'>
                    <HowItWorksDesCard linear_gradient_direction="top-to-bottom" heading="“Remarkable videos at high production speed — that's what I get from Tella.”" subheading="Jay Clouse - Creator & Founder, Creator Science" />
                    <div className='row2-image'>
                        <div className='row2-image-header'>
                            <h4>Engage 1-on-1</h4>
                            <h5>Update your community, answer questions, or share advice.</h5>
                        </div>
                        <img src={row2_image} alt="row2_image" />
                    </div>
                </div>
                <div className='how-it-works-row'>
                    <div className='row3-image'>
                        <GradientBackground left_color="#5219CE" right_color="#48FFB7" />
                        <div className='row3-inner-div'>
                            <img src={row3_image} alt="row3_image" />
                        </div>
                    </div>
                    <HowItWorksDesCard linear_gradient_direction="bottom-to-top" heading="“Tella is an essential part of my content creation toolkit — I can't work without it.”" subheading="Shubham Sharma - Creator & YouTuber" />
                </div>
            </div>
        </div>
    );
}

export default HowItWorksSection;
