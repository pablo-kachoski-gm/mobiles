import { useFormatMessage } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import Description from './Description';
import Image from './Image';
import './productDetails.css';

const ProductDetails = () => {
  const t = useFormatMessage();
  const loadingText = t({ id: 'data.loading' });

  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.productDetailsReducer
  );

  if (loadingProductDetails) return <div className="loader">{loadingText}</div>;

  const {
    imgUrl,
    options: { colors, storages }
  } = productDetails;

  const onSubmit = () => {
    //post to cart
  };

  console.log(productDetails, imgUrl);

  return (
    <div className="product-details-container">
      <div className="product-details-column-image">
        <Image url={imgUrl} />
      </div>
      <div className="product-details-column-details">
        <Description product={productDetails} />

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="product-color">Pick the color:</label>
            <select name="product-color" id="product-color">
              {colors?.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="product-storage">Pick the storage:</label>
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
