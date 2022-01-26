import { useFormatMessage } from 'react-intl-hooks';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import './products.css';

const Products = ({ loading, products }) => {
  const t = useFormatMessage();
  const loadingText = t({ id: 'data.loading' });
  const noProductsFound = t({ id: 'products.notFound' });
  const navigate = useNavigate();

  if (loading) return <div className="loader">{loadingText}</div>;

  const onProductClick = (id) => {
    const navigateTo = ['/products', id].join('/');
    navigate(navigateTo);
  };

  if (!products || products.length === 0)
    return <div className="no-products-found">{noProductsFound}</div>;

  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <ProductCard onClick={() => onProductClick(product.id)} product={product} />
        </div>
      ))}
    </div>
  );
};
export default Products;
