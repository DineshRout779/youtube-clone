import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className='flex w-full'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
