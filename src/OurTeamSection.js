import './OurTeamSection.css';
import SectionHeadings from './SectionHeadings';
import TeamRoles from './TeamRoles';
import praneeth from './images/praneeth.png';
import uday from './images/uday.png';
import sireesha from './images/sirisha.png';
import lucas from './images/lucas.png';
import snehal from './images/snehal.png';
import ratna from './images/ratna.png';
import harsh from './images/harsh.png';
import yuan from './images/yuan.png';

function OurTeamSection() {
    return (
        <div className='our-team-section'>
            <SectionHeadings heading="Our Team" subheading_line1="Meet the Minds Behind GadgetCycle" />
            <div className='team-roles-div' style={{ marginTop: "84.01px" }}>
                <TeamRoles img_src={praneeth} heading="Praneeth Narisetty" subheading="Product Manager / UI / Dev" />
                <TeamRoles img_src={uday} heading="Uday Kumar Reddy" subheading="Developer / Scrum Master" />
                <TeamRoles img_src={sireesha} heading="Sirisha Bollam" subheading="Front-End Developer" />
                <TeamRoles img_src={lucas} heading="Lucas Wang" subheading="Developer" />
            </div>
            <div className='team-roles-div' style={{ marginTop: "99px" }}>
                <TeamRoles img_src={snehal} heading="Snehal Salunke" subheading="Developer" />
                <TeamRoles img_src={ratna} heading="Ratna Meena" subheading="UI / UX Designer" />
                <TeamRoles img_src={harsh} heading="Harsh Singh" subheading="Automation Tester" />
                <TeamRoles img_src={yuan} heading="Yuan Li" subheading="Tester" />
            </div>
        </div>
    );
}

export default OurTeamSection;
