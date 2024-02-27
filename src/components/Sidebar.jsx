import { Home } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useLayoutEffect, useState } from 'react';
import { closeMenu, openMenu } from '../app/features/appSlice';

const links = [
  {
    type: null,
    items: [
      {
        title: 'Home',
        icon: <Home />,
        link: '/',
      },

      {
        title: 'Videos',
        icon: <VideoLibraryIcon />,
        link: '/#',
      },
      {
        title: 'Live',
        icon: <LiveTvIcon />,
        link: '/#',
      },
      {
        title: 'Subscription',
        icon: <SubscriptionsIcon />,
        link: '/#',
      },
    ],
  },
  //   {
  //     type:''
  //   }
];

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth < 567) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth, dispatch]);

  if (!isMenuOpen) return null;

  return (
    <div className='w-[240px] h-[90vh] sticky top-20 p-4'>
      {links.map((link) => (
        <div key={link.type}>
          <h3>{link.type === null ? '' : link.type}</h3>
          <ul>
            {link.items.map((linkItem) => (
              <li key={linkItem.title}>
                <Link
                  className='flex items-center gap-4 w-full hover:bg-gray-200 p-3 px-4 rounded-md'
                  to={linkItem.link}
                >
                  {linkItem.icon}
                  {linkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
