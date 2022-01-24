import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import './products.css';

const Products = () => {
  const { products, loadingProducts } = useSelector((state) => state.productsReducer);
  const navigate = useNavigate();

  if (loadingProducts) return <div className="loader">loading..</div>;

  const onProductClick = (id) => {
    const navigateTo = ['products', id].join('/');
    navigate(navigateTo);
  };

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
