import FilterButton from './FilterButton';

const Filters = () => {
  return (
    <div className='flex flex-wrap items-center  gap-3'>
      <FilterButton title={'All'} active={true} />
      <FilterButton title={'Music'} active={false} />
      <FilterButton title={'Sports'} active={false} />
      <FilterButton title={'Web Development'} active={false} />
      <FilterButton title={'React'} active={false} />
      <FilterButton title={'Backend'} active={false} />
    </div>
  );
};

export default Filters;
