import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../app/features/appSlice';
import { useEffect } from 'react';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(searchParams.get('v'));

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='w-full flex container mx-auto py-4'>
      <iframe
        className='basis-2/3 aspect-video rounded-md'
        src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Watch;
