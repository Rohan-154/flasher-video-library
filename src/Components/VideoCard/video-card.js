import '../VideoCard/video-card.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const VideoCard = ({ video }) => {
  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate();
  const { _id, title, catchName, uploaded } = video;
  const singlePageNavigator = () => {
    navigate(`/video/${_id}`);
  }
  return (
    <>
      <div class="container">
        <figure class="menu-card">
          <img src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
            onClick={() => singlePageNavigator()}
          />
          <figcaption>
            <h3 className='video-title'>{title}</h3>
            <p className="subtitle">{catchName}</p>
            <div className='date-three-bars' onClick={()=> setShowOption(showOption=> !showOption)}>
              <p>{uploaded}
              </p>
              <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
              <div className={`options ${showOption ? `display-flex` : `display-none`}`}>
                <div className='add'>
                  <i class="fa fa-clock-o"></i> Add to Watch Later
                </div>
                <div>
                  <i className="fa fa-play-circle"></i> Add to Playlist
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export { VideoCard };
