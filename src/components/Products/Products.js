import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
import './products.css';

const Products = () => {
  const { products, loadingProducts } = useSelector((state) => state.productsReducer);

  if (loadingProducts) return <div className="loader">loading..</div>;

  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
export default Products;
