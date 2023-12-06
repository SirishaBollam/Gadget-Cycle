import './TestimonialsSection.css';
import SectionHeadings from './SectionHeadings';
import Tweet from './Tweet';
import dp1 from './dp1.webp';
import dp2 from './dp2.webp';

function TestimonialsSection() {
    return (
        <div>
            <SectionHeadings heading="Testimonials" subheading_line1="Hear from our community about the transformative journey of gadgets," subheading_line2="from donation to making a difference in education."/>
            <div className='testimonials-container'>
                <Tweet max_width="309px" height="249.59px" dp_src={dp1} first_name="Sebastiaan" last_name="Debrouwere" username="@iamsebdeb" tweet_content="We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI" tweet_time_and_date="10:01 PM · Apr 7, 2022"/>
                <Tweet max_width="294px" height="297.59px" dp_src={dp2} first_name="Jono" last_name="Bacon" username="@jonobacon" tweet_content="Let's be honest, most CRMs suck. Overcomplicated, expensive, and you have to bend to their will...not the other way around. I am a huge fan of @attio - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple." tweet_time_and_date="4:05 PM · Jan 9, 2023" />
                <Tweet max_width="309px" height="249.59px" dp_src={dp1} first_name="Sebastiaan" last_name="Debrouwere" username="@iamsebdeb" tweet_content="We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI" tweet_time_and_date="10:01 PM · Apr 7, 2022"/>
            </div>
        </div>
    );
}

export default TestimonialsSection;
