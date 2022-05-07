import '../VideoCard/video-card.css';
import { useNavigate } from 'react-router-dom';
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
    const {_id,title,catchName,uploaded} = video;
    const singlePageNavigator = ()=>{
      navigate(`/video/${_id}`);
    }
  return (
    <>
      <div class="container">
        <figure class="menu-card">
          <img src={`https://i.ytimg.com/vi/${_id}/0.jpg`} 
          onClick={()=> singlePageNavigator()}
          />
          <figcaption>
            <h3 className='video-title'>{title}</h3>
            <p className="subtitle">{catchName}</p>
            <div className='date-three-bars'>
            <p>{uploaded}
            </p>
            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export { VideoCard };
