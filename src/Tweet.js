import './Tweet.css';
import twitter_icon from './twitter_icon.webp'

function Tweet({height, max_width, tweet_content, tweet_time_and_date, dp_src, first_name, last_name, username}) {
    return (
        <div className='testimonial' style={{height : height}}>
            <div className='tweet-header'>
                <img src={dp_src} alt="dp" className='dp_img'/>
                <div className='name_and_username'>
                    <h3>{first_name} {last_name}</h3>
                    <h5>{username}</h5>
                </div>
                <img src={twitter_icon} alt="twitter_icon" className='twitter-icon-img'/>
            </div>
            <p style={{maxWidth : max_width}}>{tweet_content}</p>
            <h6>{tweet_time_and_date}</h6>
        </div>
    );
}

export default Tweet;
