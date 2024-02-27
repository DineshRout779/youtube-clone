const FilterButton = ({ title, active }) => {
  return (
    <button
      className={`${
        active ? 'bg-black text-white' : 'bg-gray-100 text-black'
      } text-sm font-semibold p-2 px-4 rounded-md`}
    >
      {title}
    </button>
  );
};

export default FilterButton;
