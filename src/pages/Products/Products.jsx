import { useFormatMessage } from 'react-intl-hooks';
import { Counter } from '../../features/counter/Counter';

const Products = () => {
  const t = useFormatMessage();
  const pageTitle = t({ id: 'products.title' });
  return (
    <>
      <div>{pageTitle}</div>
      <Counter />
    </>
  );
};
export default Products;
