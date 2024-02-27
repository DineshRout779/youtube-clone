import Filters from './Filters';
import VideosList from './VideosList';

const Main = () => {
  return (
    <div className='w-full grow p-6'>
      <Filters />
      <VideosList />
    </div>
  );
};
export default Main;
