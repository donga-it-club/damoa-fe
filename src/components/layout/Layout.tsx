import { Outlet } from 'react-router-dom';
import PageHeaders from './PageHeaders';

const Layout = () => {
  return (
    <>
      <PageHeaders ㄴㄴ />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
