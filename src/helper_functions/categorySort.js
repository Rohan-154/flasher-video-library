const SortedCategory = (videos,sortBy) => {
    if(sortBy!== "All"){
        return videos.filter((video)=> video.category === sortBy )
    }
    return videos;
}
 
export  {SortedCategory};