import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
import './productDetails.css';

const ProductDetails = () => {
  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.productDetailsReducer
  );

  if (loadingProductDetails) return <div className="loader">loading..</div>;

  return (
    <div className="product-details-container">
      <ProductCard product={productDetails} />
    </div>
  );
};
export default ProductDetails;
