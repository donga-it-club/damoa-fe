import { Outlet } from 'react-router-dom';
import PageHeaders from './PageHeaders';

const Layout = () => {
  return (
    <>
      <PageHeaderdd />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
