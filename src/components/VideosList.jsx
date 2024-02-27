import { useEffect } from 'react';
import { useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideosList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(YOUTUBE_API);
        const data = await res.json();
        // console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 min-[1280px]:grid-cols-4 gap-x-4 gap-y-12 my-4'>
      {videos.map((video, index) => (
        <VideoCard videoData={video} key={index} />
      ))}
    </div>
  );
};
export default VideosList;
