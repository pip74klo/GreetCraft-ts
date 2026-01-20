import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
