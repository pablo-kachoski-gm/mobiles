import { useFormatMessage } from 'react-intl-hooks';
import { Counter } from '../../features/counter/Counter';

const ProductDetails = () => {
  const t = useFormatMessage();
  const pageTitle = t({ id: 'productDetails.title' });
  return (
    <>
      <div>{pageTitle}</div>
      <Counter />
    </>
  );
};
export default ProductDetails;
