import { Link } from 'react-router-dom';
import { formatViews } from '../utils/formatViews';

const VideoCard = ({ videoData }) => {
  const {
    snippet: { channelTitle, title, thumbnails, publishedAt },
    statistics: { viewCount },
  } = videoData;
  console.log(videoData);
  return (
    <div className=''>
      <Link to={`/watch?v=${videoData.id}`}>
        <img
          src={thumbnails.high.url}
          className='block w-full aspect-video rounded-md mb-2 object-cover'
          alt=''
        />
        <h1 className='font-bold'>{title}</h1>
      </Link>
      <p className='text-gray-600 font-medium'>{channelTitle}</p>
      <div className='flex gap-2 text-gray-600 text-[15px]'>
        <p>{formatViews(viewCount)} views</p> •{' '}
        <p>{new Date(publishedAt).toDateString()}</p>
      </div>
    </div>
  );
};

export default VideoCard;
