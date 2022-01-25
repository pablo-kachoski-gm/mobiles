import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
import './productDetails.css';

const ProductDetails = () => {
  const t = useFormatMessage();
  const loadingText = t({ id: 'data.loading' });

  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.productDetailsReducer
  );

  if (loadingProductDetails) return <div className="loader">{loadingText}</div>;

  return (
    <div className="product-details-container">
      <ProductCard product={productDetails} />
    </div>
  );
};
export default ProductDetails;
