import { useFormatNumber } from 'react-intl-hooks';

const Description = ({ product }) => {
  const tn = useFormatNumber();

  const { model, brand, price, weight, dimentions } = product;
  const formmatedPrice = tn(price, { style: 'currency', currency: 'EUR' });
  return (
    <div className="product-details-column-details-description">
      <div className="model">{model}</div>
      <div className="brand">{brand}</div>
      <div className="weight">{weight}</div>
      <div className="dimentions">{dimentions}</div>
      <div className="price">{formmatedPrice}</div>
    </div>
  );
};
export default Description;
