import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <section className="App-main-section">
        <Outlet />
      </section>
    </>
  );
};
export default Layout;
