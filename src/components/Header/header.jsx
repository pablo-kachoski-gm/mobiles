import { useFormatMessage } from 'react-intl-hooks';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const t = useFormatMessage();
  const headerTitle = t({ id: 'app.header.title' });
  return (
    <header className="App-header">
      <Link className="App-header-link" to="/">
        {headerTitle}
      </Link>
    </header>
  );
};
export default Header;
