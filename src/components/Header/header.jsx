import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import './header.css';

const Header = () => {
  const t = useFormatMessage();
  const { productsCount } = useSelector((state) => state.productCartReducer);

  const headerTitle = t({ id: 'app.header.title' });
  const cartTitle = t({ id: 'app.header.cart.title' });
  return (
    <header className="app-header">
      <span className="app-header-breadcrumbs">
        <Breadcrumbs />
      </span>
      <span className="app-header-title">
        <Link className="app-header-link" to="/">
          {headerTitle}
        </Link>
      </span>
      <span className="app-header-cart">{`${cartTitle} ${productsCount}`}</span>
    </header>
  );
};
export default Header;
