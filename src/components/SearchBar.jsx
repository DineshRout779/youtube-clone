import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <div className='hidden border md:flex rounded-full grow max-w-[480px]'>
      <input
        type='search'
        name='Search'
        placeholder='Search'
        className='hidden md:block border-r grow overflow-hidden rounded-full rounded-tr-none rounded-br-none  p-2 px-4'
      />
      <button className='p-2 bg-gray-100 rounded-full rounded-tl-none rounded-bl-none'>
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
