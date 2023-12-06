import './SectionHeadings.css';

function SectionHeadings({heading, subheading_line1, subheading_line2}) {
    return (
        <div className='section-heading'>
            <div className='heading'>
                <h2>{heading}</h2>
            </div>
            <div className='subheading'>
                <h5>{subheading_line1}<br/>{subheading_line2}</h5>
            </div>
        </div>
    );
}

export default SectionHeadings;
