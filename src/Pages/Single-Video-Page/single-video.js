
import { useParams } from "react-router-dom";
import { useFetch } from "../../custom-hooks/useFetch";
const SingleVideo = () => {
    const {videoId} = useParams();
    const { data: singleVideo } = useFetch(`/api/videos/${videoId}`,
    "videos")
    console.log(singleVideo);
    return(

        <>
        {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <h1 style={{marginTop:"15rem"}}>{singleVideo.title}</h1>
        
        </>
    )
}
 
export  {SingleVideo};