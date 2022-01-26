import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const t = useFormatMessage();
  const { productsCount } = useSelector((state) => state.productCartReducer);

  const headerTitle = t({ id: 'app.header.title' });
  const cartTitle = t({ id: 'app.header.cart.title' });
  return (
    <header className="App-header">
      <Link className="App-header-link" to="/">
        {headerTitle}
      </Link>
      {`${cartTitle} ${productsCount}`}
    </header>
  );
};
export default Header;
