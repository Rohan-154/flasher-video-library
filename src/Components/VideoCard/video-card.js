import '../VideoCard/video-card.css';
const VideoCard = ({ video }) => {
    const {_id,title,catchName,uploaded} = video
  return (
    <>
      <div class="container">
        <figure class="menu-card">
          <img src={`https://i.ytimg.com/vi/${_id}/0.jpg`}/>
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
