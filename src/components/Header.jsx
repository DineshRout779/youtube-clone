import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logo from './Logo';
import SearchBar from './SearchBar';
import User from './User';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../app/features/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='sticky top-0 bg-white flex gap-4 justify-between items-center p-4'>
      <div className='flex gap-4 items-center'>
        <button
          className='hover:bg-gray-100 rounded-full p-2'
          onClick={toggleSidebar}
        >
          <MenuOutlinedIcon />
        </button>
        <Logo />
      </div>
      <SearchBar />
      <User />
    </div>
  );
};

export default Header;
