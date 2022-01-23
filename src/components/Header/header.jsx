import React from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import './header.css';

const Header = () => {
  const t = useFormatMessage();
  const headerTitle = t({ id: 'app.header.title' });
  return <header className="App-header">{headerTitle}</header>;
};
export default Header;
