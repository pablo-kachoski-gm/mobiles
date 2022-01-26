import { useFormatMessage } from 'react-intl-hooks';
import './search.css';

const Search = ({ onChange }) => {
  const t = useFormatMessage();
  const searchProductsPlaceholder = t({ id: 'products.search.placeholder' });

  return (
    <input
      className="search-input"
      type="text"
      placeholder={searchProductsPlaceholder}
      onChange={onChange}
    />
  );
};
export default Search;
