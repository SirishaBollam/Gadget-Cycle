import './AboutUsPage.css';
import AboutUsTopSection from './AboutUsTopSection';
import Header from './Header';
import OurStorySection from './OurStorySection';
import OurTeamSection from './OurTeamSection';
import SectionHeadings from './SectionHeadings';

function AboutUsPage() {
    return (
        <div>
            <Header />
            <AboutUsTopSection />
            <OurStorySection />
            <OurTeamSection />
            <div className='contact-section'>
                <SectionHeadings heading="Contact Us" subheading_line1="Connect with GadgetCycle" subheading_line2="Your Gateway to Making a Difference" />
            </div>
        </div>
    );
}

export default AboutUsPage;
