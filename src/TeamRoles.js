import './TeamRoles.css';

function TeamRoles({ img_src, heading, subheading }) {
    return (
        <div className='team-roles'>
            <img src={img_src} alt='team_member_img'/>
            <h4>{heading}</h4>
            <h5>{subheading}</h5>
        </div>
    )
}

export default TeamRoles;
