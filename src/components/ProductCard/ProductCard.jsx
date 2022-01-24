import { useFormatNumber } from 'react-intl-hooks';
import './productCard.css';

const ProductCard = ({ product: { model, brand, imgUrl, price }, onClick }) => {
  const t = useFormatNumber();

  const formmatedPrice = t(price, { style: 'currency', currency: 'EUR' });
  return (
    <span className="product-card" onClick={onClick}>
      <img src={imgUrl} alt="mobile-phone" />
      <div className="product-card-description">
        <div className="model">{model}</div>
        <div className="brand">{brand}</div>
        <div className="price">{formmatedPrice}</div>
      </div>
    </span>
  );
};

export default ProductCard;
