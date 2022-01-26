import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import Description from './Description';
import Image from './Image';
import './productDetails.css';

const ProductDetails = () => {
  const t = useFormatMessage();
  const loadingText = t({ id: 'data.loading' });
  const productColorLabel = t({ id: 'productDetails.color.label' });
  const productStorageLabel = t({ id: 'productDetails.storage.label' });

  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.productDetailsReducer
  );

  if (loadingProductDetails) return <div className="loader">{loadingText}</div>;

  const productNotFound = !productDetails;
  if (productNotFound) return <div>{t({ id: 'notFound.title' })}</div>;

  const {
    imgUrl,
    options: { colors, storages }
  } = productDetails;

  const onSubmit = () => {
    //post to cart
  };

  return (
    <div className="product-details-container">
      <div className="product-details-column-image">
        <Image url={imgUrl} />
      </div>
      <div className="product-details-column-details">
        <Description product={productDetails} />

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="product-color">{productColorLabel}</label>
            <select name="product-color" id="product-color">
              {colors?.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="product-storage">{productStorageLabel}</label>
            <select name="product-storage" id="product-storage">
              {storages?.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProductDetails;
