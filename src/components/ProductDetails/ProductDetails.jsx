import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import AddProductForm from './AddProductForm';
import Description from './Description';
import Image from './Image';
import './productDetails.css';

const ProductDetails = () => {
  const t = useFormatMessage();

  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.productDetailsReducer
  );

  if (loadingProductDetails) return <div className="loader">{t({ id: 'data.loading' })}</div>;

  if (!productDetails) return <div>{t({ id: 'notFound.title' })}</div>;

  const { imgUrl } = productDetails;
  return (
    <div className="product-details-container">
      <div className="product-details-column-image">
        <Image url={imgUrl} />
      </div>
      <div className="product-details-column-details">
        <Description product={productDetails} />
        <AddProductForm product={productDetails} />
      </div>
    </div>
  );
};
export default ProductDetails;
