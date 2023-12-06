import './Content.css';
import EmpowerSection from './EmpowerSection';
import PurposeSection from './PurposeSection';
import HowItWorksSection from './HowItWorksSection';
import ImpactSection from './ImpactSection';
import TestimonialsSection from './TestimonialsSection';

function Content() {
    return (
        <div className='con-content'>
            <EmpowerSection />
            <PurposeSection />
            <HowItWorksSection />
            <ImpactSection />
            <TestimonialsSection />
        </div>
    );
}

export default Content;
